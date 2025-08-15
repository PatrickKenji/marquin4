import { useState } from 'react'
import { smoothScrollTo } from '../utils/navigation'

const navigationItems = [
  { id: 'desafios', label: 'Desafios', href: '#desafios' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'como-atuamos', label: 'Como Atuamos', href: '#como-atuamos' },
  { id: 'contato', label: 'Contato', href: '#contato' }
]

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false)
    smoothScrollTo(sectionId)
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-brand-800 p-2 hover:text-brand-600 transition-colors"
        aria-label="Abrir menu de navegação"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-50 border-b border-brand-200 shadow-lg z-50">
          <nav className="px-4 py-6">
            <ul className="space-y-4">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.id)
                    }}
                    className="block text-brand-800 p-2 font-medium text-lg hover:text-brand-600 hover:bg-brand-100 transition-colors rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

