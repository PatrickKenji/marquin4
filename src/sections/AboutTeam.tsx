import { Container, Section, Heading, Button, AnimatedHeading, AnimatedCardList, AnimatedCard } from '../components'
import type { Lawyer } from '../types'

const lawyers: Lawyer[] = [
  {
    name: 'Dr. João Silva',
    oab: 'OAB/PR 12345',
    specialty: 'Direito Agrário e Ambiental'
  },
  {
    name: 'Dra. Maria Santos',
    oab: 'OAB/PR 67890',
    specialty: 'Direito Civil e Contratual'
  },
  {
    name: 'Dr. Carlos Oliveira',
    oab: 'OAB/PR 11111',
    specialty: 'Direito do Consumidor'
  }
]

export const AboutTeam: React.FC = () => {
  return (
    <Section id="sobre" className="bg-white">
      <Container>
        <AnimatedHeading>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              Nossa Equipe Especializada
            </Heading>
            <p className="text-xl text-brand-700 max-w-3xl mx-auto">
              Advogados com mais de 15 anos de experiência no agronegócio, 
              prontos para defender seus interesses com estratégia e eficiência.
            </p>
          </div>
        </AnimatedHeading>

        <AnimatedCardList>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {lawyers.map((lawyer, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-brand-100 text-center hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-40 h-40 mx-auto mb-6 bg-brand-100 rounded-lg flex items-center justify-center text-5xl text-brand-400 shadow-inner">
                    👨‍💼
                  </div>
                  <h3 className="text-xl font-bold text-brand-800 mb-2">
                    {lawyer.name}
                  </h3>
                  <p className="text-earth-500 font-semibold mb-2">
                    {lawyer.oab}
                  </p>
                  <p className="text-brand-700">
                    {lawyer.specialty}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedCardList>

        <AnimatedCard delay={0.4}>
          <div className="text-center">
            <Button whatsapp variant="primary" size="lg" className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Falar com um advogado agora
            </Button>
          </div>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
