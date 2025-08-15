import { Container, Section, Heading, Button, AnimatedHeading, AnimatedCardList, AnimatedCard } from '../components'
import { Search, ClipboardList, Scale } from 'lucide-react'

const processSteps = [
  {
    step: '1',
    title: 'Análise do cenário e prazos',
    description: 'Entramos em contato rapidamente para entender seu caso.',
    icon: Search
  },
  {
    step: '2',
    title: 'Definição da estratégia',
    description: 'Apresentamos as opções e orientamos na escolha mais segura.',
    icon: ClipboardList
  },
  {
    step: '3',
    title: 'Atuação direta',
    description: 'Executamos as ações jurídicas necessárias para proteger seus interesses.',
    icon: Scale
  }
]

export const Process: React.FC = () => {
  return (
    <Section id="como-atuamos" className="bg-gradient-to-br from-white via-brand-50 to-white">
      <Container>
        <AnimatedHeading>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              Um caminho claro para a solução
            </Heading>
            <p className="text-xl text-brand-700 max-w-3xl mx-auto">
              Nossa metodologia é transparente e eficiente. Sabemos que no agro, 
              cada dia conta, por isso agimos com rapidez e precisão.
            </p>
          </div>
        </AnimatedHeading>

        {/* Processo com design elegante e setas curvas */}
        <AnimatedCardList>
          <div className="max-w-7xl mx-auto mb-16 relative">
            {/* Linha de fundo decorativa */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-earth-200 to-transparent transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 relative grid-rows-1">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <AnimatedCard key={index} delay={index * 0.2}>
                    <div className="relative group flex flex-col h-full">
                      {/* Card principal com efeito de elevação */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-100 hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2 relative z-20 flex-1 flex flex-col">
                        {/* Círculo de fundo decorativo */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-100 to-transparent rounded-full opacity-50 -mr-6 -mt-6"></div>
                        
                        {/* Número do passo com gradiente - POSICIONADO NO CANTO SUPERIOR DIREITO */}
                        <div className="absolute -top-2 -right-2 w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-30" style={{backgroundColor: '#4A5D4A'}}>
                          {step.step}
                        </div>
                        
                        {/* Ícone com fundo colorido */}
                        <div className="text-center mb-8 mt-8 h-32 flex items-center justify-center">
                          <div className="p-4 rounded-2xl bg-gradient-to-br from-earth-400 to-earth-500">
                            <IconComponent className="w-16 h-16 text-white" />
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-brand-800 mb-4 text-center h-16 flex items-center justify-center">
                          {step.title}
                        </h3>
                        
                        <p className="text-brand-700 leading-relaxed text-lg flex-1">
                          {step.description}
                        </p>
                      </div>

                      {/* Seta elegante SVG (exceto para o último passo) */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                          <svg width="80" height="40" viewBox="0 0 80 40" className="text-earth-400">
                            <defs>
                              <linearGradient id={`arrowGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7FB3B3" stopOpacity="0.3"/>
                                <stop offset="50%" stopColor="#7FB3B3" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#7FB3B3" stopOpacity="0.3"/>
                              </linearGradient>
                            </defs>
                            <path 
                              d="M0 20 Q20 20 40 20 Q60 20 80 20" 
                              stroke="url(#arrowGradient${index})" 
                              strokeWidth="3" 
                              fill="none"
                              strokeLinecap="round"
                            />
                            <path 
                              d="M70 15 L80 20 L70 25" 
                              stroke="url(#arrowGradient${index})" 
                              strokeWidth="3" 
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}

                      {/* Indicador de progresso flutuante */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-3 bg-earth-500 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </AnimatedCard>
                )
              })}
            </div>
          </div>
        </AnimatedCardList>

        {/* CTA com design melhorado */}
        <AnimatedCard delay={0.6}>
          <div className="text-center">
            <Button whatsapp variant="primary" size="lg" className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Agende sua conversa com um especialista
            </Button>
          </div>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
