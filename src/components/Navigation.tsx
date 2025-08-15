import { smoothScrollTo } from '../utils/navigation'

interface NavigationProps {
  className?: string
}

const navigationItems = [
  { id: 'desafios', label: 'Desafios', href: '#desafios' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'como-atuamos', label: 'Como Atuamos', href: '#como-atuamos' },
  { id: 'contato', label: 'Contato', href: '#contato' }
]

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId)
  }

  return (
    <nav className={`hidden md:flex space-x-8 ${className}`}>
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => handleNavClick(item.id)}
          className="text-brand-800 font-medium hover:text-brand-600 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

