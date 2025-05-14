"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/systemsim", label: "Simulation and Modeling" },
  // { href: "/universities", label: "University" },
  
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const renderNavLinks = (onClick = null) =>
    NAV_LINKS.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors opacity-90 hover:opacity-100"
        onClick={onClick}
      >
        {label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[var(--primary)] hover:opacity-80 transition-opacity"
        >
          Kapil.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {renderNavLinks()}
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border)]">
          <nav className="flex flex-col items-center space-y-2 py-2">
            {renderNavLinks(toggleMenu)}
            <ThemeSwitcher />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;