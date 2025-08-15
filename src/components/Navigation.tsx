import { smoothScrollTo } from '../utils/navigation'

interface NavigationProps {
  className?: string
  isTransparent?: boolean
  logoBranca: string
  logoPreta: string
}

const navigationItems = [
  { id: 'desafios', label: 'Desafios', href: '#desafios' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'como-atuamos', label: 'Como Atuamos', href: '#como-atuamos' },
  { id: 'continuidade', label: 'Contato', href: '#continuidade' }
]

export const Navigation: React.FC<NavigationProps> = ({ className = '', isTransparent = false }) => {
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
          className={`font-medium transition-colors ${
            isTransparent 
              ? 'text-white hover:text-brand-100' 
              : 'text-black hover:text-gray-700'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

