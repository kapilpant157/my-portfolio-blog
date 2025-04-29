'use client'

import Link from 'next/link'
import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import ThemeSwitcher from './ThemeSwitcher'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="  dark:border-gray-700 text-[var(--foreground)]">
      <div className="container mx-auto ">
        <div className="flex flex-col mb-6 md:flex-row justify-between items-center">
          {/* Left section - Copyright */}
          

         
          {/* Right section - Social/Contact */}
          <div className="flex items-center space-x-4">
          <Link
              href="https://instagram.com/kapilpant157/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:kapilpant157@gmail.com"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label=""
            >
              <EnvelopeIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/kapilpant157/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/kapilpant157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="GitHub"
            >
              <CodeBracketIcon className="h-5 w-5" />
            </Link>
            
          </div>

          <div className="mb-4 md:mb-0">
            <p className="text-[var(--foreground)] transition-colors">
              © Kapil.{currentYear}
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer