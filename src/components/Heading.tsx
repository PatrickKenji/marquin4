import React from 'react'

interface HeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  level = 2,
  className = '', 
  as 
}) => {
  const Component = as || `h${level}` as keyof JSX.IntrinsicElements
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  }

  return (
    <Component 
      className={`font-['Inter'] font-extrabold text-brand-800 tracking-wide ${sizeClasses[level]} ${className}`}
    >
      {children}
    </Component>
  )
}

