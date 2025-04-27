'use client'

import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold text-[var(--primary)] hover:opacity-80 transition-opacity"
        >
          Kapil.
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors opacity-90 hover:opacity-100"
          >
            Home
          </Link>
          <Link 
            href="/gallery" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors opacity-90 hover:opacity-100"
          >
            Gallery
          </Link>
          <Link 
            href="/projects" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors opacity-90 hover:opacity-100"
          >
            Projects
          </Link>
          <Link 
            href="/blog" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors opacity-90 hover:opacity-100"
          >
            Blog
          </Link>
          <Link 
            href="/systemsim" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors opacity-90 hover:opacity-100"
          >
            Simulation and Modeling
          </Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header