import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

const AdserverContext = createContext()

// Simple global Set to track loaded element IDs
const loadedAds = new Set()

// eslint-disable-next-line react-refresh/only-export-components
export const useAdserver = () => {
  const context = useContext(AdserverContext)
  if (!context) {
    throw new Error('useAdserver must be used within AdserverOnline')
  }
  return context
}

function AdserverOnline({ children }) {
  const [isASOLoaded, setIsASOLoaded] = useState(false)
  const [isASOLoadError, setIsASOLoadError] = useState(false)
  const [reloadTrigger, setReloadTrigger] = useState(0)

  useEffect(() => {
    // Check if script is already loaded
    if (window._ASO) {
      setIsASOLoaded(true)
      return
    }

    // optional configuration
    // https://adserver.online/article/ad-code
    window._aso = {
      /*attr: {
        category: "foo"
      },*/
    }

    // Replace with your if you customized ad serving domains
    // https://adserver.online/article/internal-domains-customisation
    const mediaDomain = 'media.aso1.net';

    // Create and load the ad server script
    const script = document.createElement('script')
    script.src = 'https://' + mediaDomain + '/js/code.min.js';
    script.async = true
    script.setAttribute('data-cfasync', 'false')

    script.onload = () => {
      setIsASOLoaded(true)
    }

    script.onerror = () => {
      setIsASOLoadError(true)
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const loadAd = useCallback((elementId, zoneId, callbacks = {}) => {
    if (isASOLoaded && window._ASO && !loadedAds.has(elementId)) {
      const params = {}

      if (callbacks.onEmpty) {
        const onEmptyFuncName = `${elementId}_empty`;
        window[onEmptyFuncName] = callbacks.onEmpty
        params.onempty = onEmptyFuncName
      }
      if (callbacks.onLoad) {
        const onLoadFuncName = `${elementId}_load`;
        window[onLoadFuncName] = callbacks.onLoad
        params.onload = onLoadFuncName
      }
      if (callbacks.onError) {
        params.onerror = callbacks.onError
      }

      window._ASO.loadAd(elementId, zoneId, true, params)
      loadedAds.add(elementId)
    }
  }, [isASOLoaded])

  const clearAd = useCallback((elementId) => {
    loadedAds.delete(elementId)
  }, [])

  const reloadAllAds = useCallback(() => {
    loadedAds.clear()
    // Trigger reload by incrementing the trigger
    setReloadTrigger(prev => prev + 1)
  }, [])

  return (
    <AdserverContext.Provider value={{
      isASOLoaded,
      isASOLoadError,
      loadAd,
      clearAd,
      reloadAllAds,
      reloadTrigger
    }}>
      {children}
    </AdserverContext.Provider>
  )
}

AdserverOnline.propTypes = {
  children: PropTypes.node.isRequired
}

export default AdserverOnline
