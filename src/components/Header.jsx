import { memo } from 'react'
import PropTypes from 'prop-types'
import { useAdserver } from './AdserverOnline'

const Header = memo(function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const { reloadAllAds } = useAdserver()

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* Burger menu button - only visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden mr-4 p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold">ASO React Demo</h1>
        </div>
        <button
          onClick={reloadAllAds}
          className="bg-white text-blue-600 px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Reload all advertisements"
        >
          <span className="hidden sm:inline">🔄 Reload Ads</span>
          <span className="sm:hidden">🔄</span>
        </button>
      </div>
    </header>
  )
})

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired
}

export default Header
