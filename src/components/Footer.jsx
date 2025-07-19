import { memo } from 'react'

const Footer = memo(function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-4 text-center">
      <p className="text-sm">
        Built with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  )
})

export default Footer
