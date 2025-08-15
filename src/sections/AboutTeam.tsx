import { Container, Section, Heading, Button, AnimatedHeading, AnimatedCardList, AnimatedCard } from '../components'
import type { Lawyer } from '../types'
import anaBeatriz from '../assets/ana-beatriz.avif'
import marcosSilva from '../assets/marcos-silva.avif'
import beatrizAlmeida from '../assets/beatriz-almeida.avif'

const lawyers: Lawyer[] = [
  {
    name: 'Beatriz Almeida',
    oab: 'OAB/PR 84.253',
    specialty: 'Me formei na PUC/PR Câmpus Maringá em 2011, fiz minha primeira especialização em Direito e Processo do Trabalho no ano de 2016, em 2020 iniciei minha segunda pós-graduação em Direito Civil e Empresarial, e no ano de 2021 finalizei minha pós-graduação em Direito e Gestão do Agronegócio!! Foi o Direito do Agro que fez meu coração bater mais forte e é ele que me leva a olhar para meu ofício e entender que minha sede de justiça deve ser tamanha àqueles que lutam arduamente para alimentar e trazer desenvolvimento para o nosso País!!',
    photo: beatrizAlmeida
  },
  {
    name: 'Marcos Silva',
    oab: 'OAB/PR 100.073',
    specialty: 'Advogado formado em Direito pela Universidade Estadual de Maringá e pós-graduado pela PUC Minas. Especializado em Direito do Agronegócio, com mais de seis anos de experiência, atua na assessoria jurídica de produtores rurais e empresas do setor oferecendo soluções estratégicas em regularização fundiária, seguro rural, questões ambientais, tributárias e em face da administração pública.',
    photo: marcosSilva
  },
  {
    name: 'Ana Beatriz',
    oab: 'OAB/PR 106.233',
    specialty: 'Olá. me chamo Ana Beatriz Santos! Sou advogada formada pela Pontifícia Universidade Católica do Paraná (PUCPR) e pós-graduanda de Direito Civil e Processo Civil pela LEGALE. Possui especialização em família e sucessões por meio do Instituto Danielle Lopes (IDL) e Centro Universitário de Tecnologia de Curitiba (UNIFATEC). Ao longo dos anos na área jurídica, meu objetivo é oferecer aos clientes um planejamento sucessório e patrimonial que lhes proporcionem tranquilidade ao longo da vida.',
    photo: anaBeatriz
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {lawyers.map((lawyer, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-brand-100 text-center hover:shadow-xl hover:border-earth-300 transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-lg overflow-hidden shadow-inner">
                    <img 
                      src={lawyer.photo} 
                      alt={lawyer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand-800 mb-2">
                    {lawyer.name}
                  </h3>
                  <p className="text-earth-500 font-semibold mb-2">
                    {lawyer.oab}
                  </p>
                  <p className="text-brand-700 text-sm leading-relaxed">
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
