import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: keyof JSX.IntrinsicElements
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  as: Component = 'section' 
}) => {
  return (
    <Component 
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      {children}
    </Component>
  )
}

