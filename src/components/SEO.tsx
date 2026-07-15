import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    keywords?: string;
    /** One or more JSON-LD schema objects rendered as separate ld+json blocks */
    schema?: object | object[];
    /** Set true on error/utility pages that must not be indexed */
    noindex?: boolean;
}

export const SEO = ({
    title,
    description,
    canonical = 'https://nvhotech.com/',
    ogImage = 'https://nvhotech.com/images/logoNT.png',
    ogType = 'website',
    keywords = 'software development company, web development, mobile app development, AI automation, custom software',
    schema,
    noindex = false,
}: SEOProps) => {
    const fullTitle = `${title} | NVHO Tech`;
    const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="NVHO Tech" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional SEO */}
            <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
            <meta name="author" content="NVHO Tech" />

            {/* Structured Data */}
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
};
