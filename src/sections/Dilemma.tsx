import { Container, Section, Heading, Button, AnimatedHeading, AnimatedCard } from '../components'

export const Dilemma: React.FC = () => {
  return (
    <Section id="dilema" className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
      <Container>
        <AnimatedHeading>
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6 text-white">
              O Dilema do Produtor Rural
            </Heading>
            <p className="text-xl text-brand-100 max-w-4xl mx-auto leading-relaxed">
              Você está enfrentando um problema jurídico no agro e não sabe por onde começar? 
              Cada dia de espera pode significar perdas maiores. A decisão é sua: agir agora ou arriscar o futuro?
            </p>
          </div>
        </AnimatedHeading>

        <AnimatedCard delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button whatsapp variant="primary" size="lg" className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Falar com um advogado agora
            </Button>
          </div>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
