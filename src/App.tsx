import { Container, Section, Heading, Button, Navigation, MobileMenu } from './components'
import { Challenges, Dilemma, AboutTeam, Process, Outcome, OnSite, Continuity, FAQ } from './sections'
import { useState, useEffect } from 'react'
import logoBranca from './assets/logo-branca.png'
import logoPreta from './assets/logo-preta.png'

function App() {
  // Estado para controlar a transparência do header
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)

  // Effect para detectar scroll e alterar transparência do header
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = 100 // Threshold para mudança de estado
      
      if (scrollY > threshold) {
        setIsHeaderTransparent(false)
      } else {
        setIsHeaderTransparent(true)
      }
    }

    // Throttle para performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll)
    
    // Cleanup
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-earth-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header dinâmico */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isHeaderTransparent 
          ? 'bg-transparent border-transparent shadow-none' 
          : 'bg-white/95 backdrop-blur-sm border-b border-brand-200 shadow-soft'
      }`}>
        <Container>
          <div className="flex items-center justify-between h-16">
                                          <div className="flex items-center">
                  <img 
                    src={isHeaderTransparent ? logoBranca : logoPreta}
                    alt="Urgani Advocacia"
                    className="h-12 w-auto transition-all duration-300"
                  />
                </div>
                          <Navigation isTransparent={isHeaderTransparent} logoBranca={logoBranca} logoPreta={logoPreta} />
                              <MobileMenu isTransparent={isHeaderTransparent} logoBranca={logoBranca} logoPreta={logoPreta} />
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - Header Full Screen */}
        <Section className="min-h-screen sm:min-h-screen relative overflow-hidden -mt-16">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/src/assets/card-hero.png)'}}></div>
          {/* Overlay com gradiente linear de cima para baixo */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/80"></div>
          
          <Container className="relative z-10 h-full flex items-center justify-start">
            <div className="w-full flex justify-start items-center h-full pt-36 sm:pt-32 lg:pt-48 pl-0 sm:pl-0 lg:pl-2">
              {/* Conteúdo centralizado */}
              <div className="text-left max-w-5xl px-0 flex flex-col justify-center py-0 sm:py-0">
                                <Heading level={1} className="mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-relaxed max-w-4xl">
                  <div>Especialistas em Direito</div>
                  <div>do Agronegócio</div>
                </Heading>
                
                <p className="text-lg lg:text-xl text-brand-100 mb-8 leading-relaxed max-w-2xl">
                  Atuação estratégica em dívidas rurais, seguros agrícolas negados e proteção do patrimônio.
                </p>
                
                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-start">
                  <Button whatsapp variant="primary" size="lg" className="text-base px-6 py-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[280px]">
                    Falar agora
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="text-base px-6 py-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[280px]"
                    onClick={() => {
                      const element = document.getElementById('sobre')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Conhecer nossa equipe
                  </Button>
                </div>

                {/* Bullets - Na mesma linha */}
                <div className="flex flex-col sm:flex-row gap-6 justify-start">
                  <div className="flex items-center justify-start text-sm text-brand-100">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="#6B8A6B" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    + de 15 anos de experiência no agro
                  </div>
                  <div className="flex items-center justify-start text-sm text-brand-100">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="#6B8A6B" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Atendimento presencial em Maringá e região
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Seção Desafios */}
        <Challenges />

        {/* Seção Incerteza - O Dilema */}
        <Dilemma />

        {/* Seção Sobre/Equipe */}
        <AboutTeam />

        {/* Seção Como Atuamos */}
        <Process />

        {/* Seção Conquista */}
        <Outcome />

        {/* Seção Nós vamos até você */}
        <OnSite />

        {/* Seção Continuidade */}
        <Continuity />

        {/* Seção FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-brand-800 text-white py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Coluna 1: Sobre a Empresa */}
            <div className="lg:col-span-2">
              <div className="mb-6">
            <div className="mb-4">
              <img 
                src={logoBranca}
                alt="Urgani Advocacia"
                className="h-10 w-auto"
              />
            </div>
                <p className="text-brand-100 leading-relaxed">
                  Especialistas em Direito do Agronegócio com mais de 15 anos de experiência. 
                  Atendemos produtores rurais, empresas do agro e cooperativas em toda a região 
                  de Maringá e Paraná, oferecendo soluções jurídicas personalizadas e eficientes.
                </p>
              </div>
              
              {/* Botão WhatsApp */}
              <Button whatsapp variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-brand-800">
                Falar com um advogado agora
              </Button>
            </div>

            {/* Coluna 2: Áreas de Atuação */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Áreas de Atuação</h4>
              <ul className="space-y-2 text-brand-100">
                <li>• Seguros agrícolas negados</li>
                <li>• Dívidas rurais</li>
                <li>• Proteção patrimonial</li>
                <li>• Conflitos comerciais</li>
                <li>• Regularização fundiária</li>
                <li>• Compliance no agro</li>
              </ul>
            </div>

            {/* Coluna 3: Contato e Redes */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
              <div className="space-y-3 text-brand-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-earth-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Maringá, PR</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-earth-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(44) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-earth-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3 text-white">Siga-nos</h5>
                <div className="flex gap-3">
                  <a 
                    href="https://instagram.com/urganiadvocacia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-transparent border border-earth-400 rounded-full flex items-center justify-center hover:bg-earth-400/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-earth-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/urgani-advocacia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-transparent border border-earth-400 rounded-lg flex items-center justify-center hover:bg-earth-400/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-earth-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-brand-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-brand-200 text-sm mb-4 md:mb-0">
              © 2025 Urgani Advocacia. Todos os direitos reservados.
              </div>
              <div className="text-sm text-earth-400">
                <span>OAB/PR</span>
              </div>
            </div>
          </div>
        </Container>
      </footer>

    </div>
  )
}

export default App
