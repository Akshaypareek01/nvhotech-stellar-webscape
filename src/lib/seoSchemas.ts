/**
 * Shared JSON-LD schema builders.
 * Keep brand facts (name, logo, socials) in ONE place so every page emits
 * consistent data — consistency is a ranking/citation signal for both
 * Google and AI answer engines (ChatGPT, Perplexity, AI Overviews).
 */

export const SITE_URL = 'https://nvhotech.com';
export const BRAND_NAME = 'NVHO Tech';
export const BRAND_LOGO = `${SITE_URL}/images/logoNT.png`;
export const BRAND_DESCRIPTION =
    'NVHO Tech is a software development company that builds custom web applications, mobile apps, AI automation, and enterprise software for startups and businesses worldwide.';

export const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    legalName: 'Nvhotech Private Ltd',
    url: SITE_URL,
    logo: BRAND_LOGO,
    description: BRAND_DESCRIPTION,
    email: 'info@nvhotech.com',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'info@nvhotech.com',
        url: `${SITE_URL}/#contact`,
        availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
        'https://www.linkedin.com/company/nvhotech',
        'https://twitter.com/nvhotech',
        'https://www.facebook.com/nvhotech',
    ],
    areaServed: 'Worldwide',
    knowsAbout: [
        'Web Development',
        'Mobile App Development',
        'AI Automation',
        'Custom Software Development',
        'Digital Marketing',
        'UI/UX and Brand Design',
    ],
};

export const WEBSITE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BRAND_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
};

export interface BreadcrumbItem {
    name: string;
    path: string; // e.g. '/web-development'
}

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        ...items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
        })),
    ],
});

export interface FAQItem {
    question: string;
    answer: string;
}

export const faqSchema = (faqs: FAQItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
});

interface ServiceSchemaInput {
    serviceType: string;
    path: string; // e.g. '/web-development'
    description: string;
    offerings?: string[]; // e.g. ['Custom Web Applications', 'E-Commerce Solutions']
}

export const serviceSchema = ({ serviceType, path, description, offerings }: ServiceSchemaInput) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    serviceType,
    name: `${serviceType} by ${BRAND_NAME}`,
    url: `${SITE_URL}${path}`,
    description,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Worldwide',
    ...(offerings?.length
        ? {
              hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: `${serviceType} Services`,
                  itemListElement: offerings.map((name) => ({
                      '@type': 'Offer',
                      itemOffered: { '@type': 'Service', name },
                  })),
              },
          }
        : {}),
});
