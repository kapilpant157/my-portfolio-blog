'use client'

import Link from 'next/link'
import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import ThemeSwitcher from './ThemeSwitcher'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="  dark:border-gray-700 dark:text-gray-900">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section - Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} My Portfolio. All rights reserved.
            </p>
          </div>

          {/* Middle section - Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0 text-gray-200 dark:text-gray-900">
            <Link 
              href="/about" 
              className="text-gray-200 dark:text-gray-900 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              Privacy
            </Link>
          </nav>

          {/* Right section - Social/Contact */}
          <div className="flex items-center space-x-4">
            <Link
              href="mailto:kapilpant157@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="Email"
            >
              <EnvelopeIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/kapilpant157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="GitHub"
            >
              <CodeBracketIcon className="h-5 w-5" />
            </Link>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Attribution (optional) */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Built with Next.js, Tailwind CSS, and ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer