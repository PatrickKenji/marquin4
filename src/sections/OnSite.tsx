import { Container, Section, Heading, Button, AnimatedHeading, AnimatedCardList, AnimatedCard } from '../components'

export const OnSite: React.FC = () => {
  return (
    <Section id="nos-vamos-ate-voce" className="bg-brand-50">
      <Container>
        <AnimatedHeading>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              Nós vamos até você
            </Heading>
            <p className="text-xl text-brand-700 max-w-4xl mx-auto leading-relaxed">
              Temos escritório em Maringá, mas também realizamos reuniões presenciais na sua propriedade 
              ou empresa, em toda a região. Assim, entendemos melhor a sua realidade e encontramos juntos 
              a solução mais adequada.
            </p>
          </div>
        </AnimatedHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Conteúdo */}
          <AnimatedCardList className="h-full">
            <div className="space-y-6 h-full">
              <AnimatedCard delay={0.1}>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-brand-100 hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-800 mb-1">Atendimento In Loco</h3>
                      <p className="text-brand-700 text-sm">Na sua propriedade ou empresa</p>
                    </div>
                  </div>
                                      <p className="text-brand-700">
                      Entendemos que no agro, cada propriedade tem suas particularidades. 
                      Por isso, vamos até você para conhecer de perto sua realidade.
                    </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-brand-100 hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-800 mb-1">Soluções Personalizadas</h3>
                      <p className="text-brand-700 text-sm">Baseadas na sua realidade</p>
                    </div>
                  </div>
                                      <p className="text-brand-700">
                      Cada caso é único. Nossa visita permite criar estratégias 
                      jurídicas específicas para o seu contexto.
                    </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-brand-100 hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-800 mb-1">Economia de Tempo</h3>
                      <p className="text-brand-700 text-sm">Você não precisa se deslocar</p>
                    </div>
                  </div>
                                      <p className="text-brand-700">
                      Enquanto cuidamos dos seus interesses jurídicos, 
                      você pode focar no que realmente importa: sua produção.
                    </p>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedCardList>

          {/* CTA e Informações */}
          <AnimatedCard delay={0.4} className="h-full">
            <div className="bg-white rounded-xl p-8 shadow-soft border border-brand-100 flex flex-col justify-center hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2 h-full">
              {/* Google Maps - Localização da Empresa */}
              <div className="mb-8 text-center">
                <h4 className="text-lg font-semibold text-brand-800 mb-4">Nossa Localização</h4>
                <div className="w-full h-56 rounded-lg overflow-hidden border border-brand-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d-51.9429411!3d-23.4252756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd79c00b44297%3A0x1833c18b24d9706a!2sAlmeida%20Urgnani%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Almeida Urgnani Advocacia em Maringá"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-sm text-brand-700 mt-3">Almeida Urgnani Advocacia - Maringá, Paraná</p>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-800 mb-8 text-left">
                Agende sua reunião
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-brand-700 justify-start">
                  <svg className="w-6 h-6 text-earth-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm leading-relaxed text-left">Plantão para demandas urgentes</span>
                </div>
                
                <div className="flex items-start gap-3 text-brand-700 justify-start">
                  <svg className="w-6 h-6 text-earth-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm leading-relaxed text-left">Atendimento no escritório ou na sua propriedade</span>
                </div>
                
                <div className="flex items-start gap-3 text-brand-700 justify-start">
                  <svg className="w-6 h-6 text-earth-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm leading-relaxed text-left">Mais de 15 anos de experiência no agro</span>
                </div>
              </div>

              <div className="space-y-3 text-center">
                <Button whatsapp variant="primary" size="lg" className="w-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Agende agora sua reunião
                </Button>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </Container>
    </Section>
  )
}

