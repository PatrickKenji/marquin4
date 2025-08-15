import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6
}) => {
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }

    switch (direction) {
      case 'up':
        return {
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 }
        }
      case 'down':
        return {
          hidden: { ...baseVariants.hidden, y: -50 },
          visible: { ...baseVariants.visible, y: 0 }
        }
      case 'left':
        return {
          hidden: { ...baseVariants.hidden, x: 50 },
          visible: { ...baseVariants.visible, x: 0 }
        }
      case 'right':
        return {
          hidden: { ...baseVariants.hidden, x: -50 },
          visible: { ...baseVariants.visible, x: 0 }
        }
      default:
        return baseVariants
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  )
}

// Componente específico para títulos
export const AnimatedHeading: React.FC<{ children: ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0
}) => (
  <ScrollAnimation direction="up" delay={delay} className={className}>
    {children}
  </ScrollAnimation>
)

// Componente específico para cards
export const AnimatedCard: React.FC<{ children: ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0
}) => (
  <ScrollAnimation direction="up" delay={delay} className={className}>
    {children}
  </ScrollAnimation>
)

// Componente específico para listas de cards
export const AnimatedCardList: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <ScrollAnimation direction="up" className={className}>
    {children}
  </ScrollAnimation>
)
