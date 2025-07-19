import { memo } from 'react'
import AsoZone from '../components/AsoZone'

const About = memo(function About() {
  return (
    <div className="flex flex-col">
      {/* Banner at top of page */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 border-b border-gray-200 p-4 md:p-6 flex justify-center">
        <AsoZone zoneId="91185" reloadOnNavigation={false} width="728px" height="90px" />
      </div>

      {/* Page content */}
      <div className="p-4 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          📢 Professional SaaS Ad Server Platform
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            <a href="https://adserver.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Adserver.Online</a> is a comprehensive SaaS ad tech platform that provides the technology infrastructure for building ad networks, tracking advertisements, and managing campaigns at scale.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">🏢 Platform Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since 2014, serving thousands of customers worldwide with millions to billions of ad requests monthly.
              </p>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>✅ Not an advertising network - provides technology infrastructure</li>
                <li>✅ Helps build advertising businesses</li>
                <li>✅ Advanced technology with expert support</li>
                <li>✅ Transparent pricing with no hidden fees</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Core Services</h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li><strong><a href="https://adserver.online/display-ad-server" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Display Ad Server</a>:</strong> Boost website revenue with precise targeting</li>
                <li><strong><a href="https://adserver.online/video-ad-server" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Video Ad Solutions</a>:</strong> High-quality video ads across all screens including OTT platforms</li>
                <li><strong><a href="https://adserver.online/ad-network-builder" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Ad Network Builder</a>:</strong> Create and manage your own advertising network</li>
                <li><strong><a href="https://adserver.online/programmatic-ad-server" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Programmatic Ad Server</a>:</strong> Streamline the buying, selling, and exchanging of ads with our programmatic ad server</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">💪 Platform Advantages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">🔒 Reliability</h4>
                <p className="text-gray-600 text-sm">Assured uptime handling millions of requests monthly</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">🔧 Customization</h4>
                <p className="text-gray-600 text-sm">Adapts to any business model with high flexibility</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">💎 Value</h4>
                <p className="text-gray-600 text-sm">Expert support with great value for money</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🎯 This Demo</h3>
            <p className="text-gray-600 leading-relaxed">
              This <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">React</a> application demonstrates how to integrate <a href="https://adserver.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Adserver.Online's technology</a> into modern web applications,
              showcasing dynamic ad loading, multiple ad zones, and seamless user experience across different devices. Learn more about <a href="https://en.wikipedia.org/wiki/Ad_serving" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ad serving technology</a> and its implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
