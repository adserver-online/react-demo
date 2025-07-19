import { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AsoZone from './AsoZone'

const Sidebar = memo(function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:static
          left-0 top-0
          w-80 h-full
          bg-gray-50 border-r border-gray-200 
          p-6 flex-shrink-0 
          transition-transform duration-300 ease-in-out
          z-50 md:z-auto
          overflow-y-auto
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <nav>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Go to Home page"
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Go to About page"
              >
                ℹ️ About Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col">
          <div className="flex justify-center mt-10">
            <AsoZone zoneId="34919" width="240px" height="400px" />
          </div>
        </div>
      </aside>
    </>
  )
})

Sidebar.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired
}

export default Sidebar
