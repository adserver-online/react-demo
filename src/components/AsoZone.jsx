import { useEffect, useRef, useCallback, memo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAdserver } from './AdserverOnline'

// Generate unique ID for each AsoZone instance
let instanceCounter = 0
const generateUniqueId = () => {
  instanceCounter++
  return `aso_${instanceCounter}_${Math.random().toString(36).slice(-4)}`
}

const AsoZone = memo(function AsoZone({ zoneId, reloadOnNavigation = true, width, height, onEmpty, onError }) {
  const { isASOLoaded, isASOLoadError, loadAd, clearAd, reloadTrigger } = useAdserver()
  const loadedRef = useRef(false)
  const elementIdRef = useRef(null)
  const [isEmpty, setIsEmpty] = useState(false)
  const [hasError, setHasError] = useState(false)
  const location = useLocation()

  // Generate unique element ID once and never change it
  if (!elementIdRef.current) {
    elementIdRef.current = generateUniqueId()
  }
  const elementId = elementIdRef.current

  // Reset ad loading state on navigation (only if reloadOnNavigation is true)
  useEffect(() => {
    if (reloadOnNavigation) {
      clearAd(elementId)
      loadedRef.current = false
      setIsEmpty(false)
      setHasError(false)
    }
  }, [location.pathname, elementId, clearAd, reloadOnNavigation])

  // Helper function to load ad with callbacks
  const loadAdWithCallbacks = useCallback(() => {
    const callbacks = {}

    // Default onEmpty behavior - always set up the callback
    callbacks.onEmpty = () => {
      setIsEmpty(true)
      // Call user-provided onEmpty if exists
      if (onEmpty) {
        onEmpty()
      }
    }

    // Default onError behavior - always set up the callback
    callbacks.onError = () => {
      setHasError(true)
      // Call user-provided onError if exists
      if (onError) {
        onError()
      }
    }

    loadAd(elementId, zoneId, callbacks)
    loadedRef.current = true
  }, [elementId, zoneId, loadAd, onEmpty, onError, setIsEmpty, setHasError])

  // Main effect - handles script loading and reload triggers
  useEffect(() => {
    if (!isASOLoaded) return

    // Initial load
    if (!loadedRef.current) {
      loadAdWithCallbacks()
      return
    }

    // Handle reload trigger
    if (reloadTrigger > 0) {
      loadedRef.current = false
      setIsEmpty(false)
      setHasError(false)
      loadAdWithCallbacks()
    }
  }, [isASOLoaded, reloadTrigger, loadAdWithCallbacks])

  // Clear ad when component unmounts (only if reloadOnNavigation is false)
  useEffect(() => {
    return () => {
      if (!reloadOnNavigation) {
        clearAd(elementId)
        loadedRef.current = false
      }
    }
  }, [elementId, clearAd, reloadOnNavigation])

  const renderContent = () => {
    if (isASOLoadError || hasError) {
      return (
        <div className="flex justify-center items-center text-gray-500 text-sm h-full">
          Failed to load ad
        </div>
      )
    }

    if (!isASOLoaded || !loadedRef.current) {
      return (
        <div
           className="flex justify-center items-center text-gray-400 text-sm h-full animate-pulse"
        >
          Loading ad...
        </div>
      )
    }

    if (isEmpty) {
      return (
        <div className="flex justify-center items-center text-gray-500 text-sm h-full">
          No ad
        </div>
      )
    }

    return null
  }

  // Generate dynamic className for wrapper based on props
  const getWrapperStyles = () => {
    let styles = {}

    // Add default min dimensions only if width/height are not provided
    if (width) {
      styles.width = "100%";
      styles.maxWidth = width;
    }

    if (height) {
      styles.minHeight = height;
    }

    return styles
  }

  return (
    <div
      className="inline-block"
      style={getWrapperStyles()}
    >
      <div
        className="w-full h-full border border-blue-300 bg-blue-50 text-center p-4 shadow-sm"
        id={elementId}
      >
        {renderContent()}
      </div>
    </div>
  )
})

AsoZone.propTypes = {
  zoneId: PropTypes.string.isRequired,
  reloadOnNavigation: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  onEmpty: PropTypes.func,
  onError: PropTypes.func
}

AsoZone.defaultProps = {
  reloadOnNavigation: true
}

export default AsoZone
