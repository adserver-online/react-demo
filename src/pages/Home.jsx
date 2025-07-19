import { memo } from 'react'
import AsoZone from '../components/AsoZone'

const Home = memo(function Home() {
  return (
    <div className="flex flex-col">
      {/* Banner at top of page */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 border-b border-gray-200 p-4 md:p-6 flex justify-center">
        <AsoZone
          zoneId="36082"
          reloadOnNavigation={false}
          width="728px"
          height="90px"
        />
      </div>

      {/* Page content */}
      <div className="p-4 md:p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          🚀 Welcome to ASO React Demo
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            This is a demo website for Adserver.Online <a className="underline" href="https://adserver.online" target="_blank">SaaS ad server</a>, showcasing how banner ads
            can be integrated into a React application.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The application demonstrates:
          </p>
          <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2 mb-8 bg-gray-50 p-4 rounded-md">
            <li>✅ React-based Single Page Application (SPA)</li>
            <li>✅ Responsive layout with header, sidebar, and footer</li>
            <li>✅ Ad zone integration in different locations</li>
            <li>✅ Client-side routing between pages</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
            <p className="text-gray-600 leading-relaxed">
              💡 You can see ad zones at the top of this page and in the sidebar area. These zones are powered
              by Adserver.Online and load dynamically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home
