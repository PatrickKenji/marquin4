// Utilitários para SEO
export const generateMetaTags = (title: string, description: string, url: string, image?: string) => {
  return {
    title: `${title} | Urgani Advocacia`,
    description,
    keywords: 'advocacia agronegócio, direito rural, seguro agrícola, dívida rural, proteção patrimonial, advogado agro, Maringá PR',
    author: 'Urgani Advocacia',
    robots: 'index, follow',
    // Open Graph
    'og:type': 'website',
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image || 'https://urganiadvocacia.com.br/og-image.jpg',
    // Twitter
    'twitter:card': 'summary_large_image',
    'twitter:url': url,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image || 'https://urganiadvocacia.com.br/og-image.jpg',
  }
}

export const generateLegalServiceSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Urgani Advocacia',
    description: 'Especialistas em Direito do Agronegócio',
    url: 'https://urganiadvocacia.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Endereço do escritório',
      addressLocality: 'Maringá',
      addressRegion: 'PR',
      postalCode: '87000-000',
      addressCountry: 'BR'
    },
    areaServed: 'Brasil',
    serviceType: 'Direito do Agronegócio',
    telephone: '+55XXXXXXXXXXX',
    email: 'contato@urganiadvocacia.com.br'
  }
}

