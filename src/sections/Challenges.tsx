import { Container, Section, Heading, Button, AnimatedHeading, AnimatedCardList, AnimatedCard } from '../components'
import { Shield, Clock, Lock, Handshake } from 'lucide-react'
import type { Challenge } from '../types'

const challenges: Challenge[] = [
  {
    title: 'Alongamento de dívida rural',
    description: 'Ajudamos você a estender o prazo de pagamento da sua dívida rural para evitar prejuízos e manter sua produção ativa.',
    icon: Clock
  },
  {
    title: 'Cobrança de seguro agrícola indeferido',
    description: 'Se o seu seguro rural foi negado, atuamos para recorrer e buscar o valor a que você tem direito.',
    icon: Shield
  },
  {
    title: 'Renegociação de dívidas',
    description: 'Negociamos novas condições com bancos e credores para reduzir a pressão financeira sobre o seu negócio.',
    icon: Handshake
  },
  {
    title: 'Suspensão de penhora de propriedade rural',
    description: 'Defendemos seu direito para evitar que sua propriedade rural seja bloqueada ou tomada por cobrança judicial.',
    icon: Lock
  }
]

export const Challenges: React.FC = () => {
  return (
    <Section id="desafios" className="bg-brand-50">
      <Container>
        <AnimatedHeading>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              Desafios que exigem atenção imediata
            </Heading>
            <p className="text-xl text-brand-700 max-w-3xl mx-auto">
              No agronegócio, certos problemas têm prazos curtos e podem comprometer toda a operação. 
              Identificamos e resolvemos os principais desafios que produtores enfrentam.
            </p>
          </div>
        </AnimatedHeading>

        <AnimatedCardList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon
              return (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <div className="flex flex-col h-full">
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-brand-100 flex-1 flex flex-col hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-center mb-4 h-16 flex items-center justify-center">
                        <IconComponent className="w-10 h-10 text-accent-500" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-800 mb-3 text-center h-16 flex items-center justify-center">
                        {challenge.title}
                      </h3>
                      <p className="text-brand-700 text-center leading-relaxed flex-1">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </AnimatedCardList>

        <AnimatedCard delay={0.4}>
          <div className="text-center mt-12">
            <Button whatsapp variant="primary" size="lg" className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Falar com um advogado agora
            </Button>
          </div>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
