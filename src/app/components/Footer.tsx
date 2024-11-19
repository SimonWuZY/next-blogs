import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-600">邮箱: contact@example.com</p>
            <p className="text-gray-600">电话: +1 (555) 123-4567</p>
            <p className="text-gray-600">地址: 123 Main St, Anytown, AN 12345</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">快速链接</h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://github.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 您的公司名称. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}