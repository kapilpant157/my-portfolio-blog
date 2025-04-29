'use client'

import Link from 'next/link'

const Button = ({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  ...props
}) => {
  // Base classes
  const baseClasses = 'rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] disabled:opacity-50 disabled:cursor-not-allowed'

  // Variant classes
  const variantClasses = {
    primary: 'bg-[var(--primary)] text-white hover:opacity-90',
    secondary: 'bg-[var(--secondary)] bg-opacity-10 text-[var(--foreground)] hover:bg-opacity-20',
    outline: 'border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background)] hover:bg-opacity-50',
    ghost: 'text-[var(--foreground)] hover:bg-[var(--background)] hover:bg-opacity-50',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }

  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }

  // Combine all classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  // Render as link if href is provided
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...props}
      >
        {children}
      </Link>
    )
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button



// Basic usage
{/* <Button>Click Me</Button> */}

// As a link
{/* <Button href="/about">About</Button> */}

// Different variants
{/* <Button variant="secondary">Secondary</Button> */}
{/* <Button variant="outline">Outline</Button> */}

// Different sizes
{/* <Button size="small">Small</Button> */}
{/* <Button size="large">Large</Button> */}

// With click handler
{/* <Button onClick={() => console.log('Clicked')}>Log Click</Button> */}

// Disabled state
{/* <Button disabled>Disabled</Button> */}

// Custom class
{/* <Button className="uppercase">Custom Styled</Button> */}