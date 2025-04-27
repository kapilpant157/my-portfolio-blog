// components/ui/LinkButton.tsx
'use client'

import React from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  isExternal?: boolean
  disabled?: boolean
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      href,
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      isExternal = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex items-center justify-center',
      'rounded font-medium',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]',
      disabled ? 'opacity-50 pointer-events-none' : '',
    ].join(' ')

    const variantClasses = {
      primary: 'bg-[var(--primary)] text-white hover:opacity-90',
      secondary: 'bg-[var(--secondary)]/10 text-[var(--foreground)] hover:bg-[var(--secondary)]/20',
      outline: 'border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background)]/50',
      ghost: 'text-[var(--foreground)] hover:bg-[var(--background)]/50',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    }[variant]

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }[size]

    const combinedClasses = [baseClasses, variantClasses, sizeClasses, className].join(' ')

    const externalProps = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <Link
        href={href}
        ref={ref}
        className={combinedClasses}
        {...externalProps}
        {...props}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    )
  }
)

LinkButton.displayName = 'LinkButton'

export default LinkButton  // Changed from named export to default export