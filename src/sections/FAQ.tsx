import { useState } from 'react'
import { Container, Section, Heading } from '../components'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Quais são os prazos para entrar com ações jurídicas?',
    answer: 'Os prazos variam conforme o tipo de caso. Para seguros agrícolas negados, geralmente temos 30 dias após a negativa. Para dívidas rurais, o prazo pode ser de 5 anos. É fundamental agir rapidamente para preservar seus direitos.'
  },
  {
    question: 'Como funcionam os custos iniciais?',
    answer: 'Oferecemos primeira consulta sem custo para entender seu caso. Após análise, apresentamos as opções de contrato, que podem incluir honorários por resultado ou mensais, dependendo da complexidade do caso.'
  },
  {
    question: 'Que documentação preciso fornecer?',
    answer: 'Depende do tipo de caso, mas geralmente incluímos: contratos, documentos de identificação, comprovantes de pagamento, comunicações com seguradoras ou bancos, e qualquer documentação relacionada ao problema.'
  },
  {
    question: 'Qual o tempo médio para resolução?',
    answer: 'Casos de seguros agrícolas podem ser resolvidos em 3-6 meses. Dívidas rurais podem levar 6-12 meses, dependendo da complexidade. Sempre priorizamos soluções rápidas quando possível.'
  },
  {
    question: 'Atendem apenas produtores rurais?',
    answer: 'Não, atendemos produtores rurais, empresas do agronegócio, cooperativas, transportadoras e qualquer pessoa ou empresa que tenha questões jurídicas relacionadas ao setor agro.'
  },
  {
    question: 'Posso agendar reunião fora do horário comercial?',
    answer: 'Sim, oferecemos flexibilidade de horários para atender às necessidades do agro. Podemos agendar reuniões presenciais ou online em horários que funcionem melhor para você.'
  }
]

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <Section id="faq" className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="mb-6">
            Perguntas Frequentes
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre nossos serviços e como podemos ajudar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-soft overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-brand-900 pr-4">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-brand-600 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg"
            >
              Ir para contato
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

