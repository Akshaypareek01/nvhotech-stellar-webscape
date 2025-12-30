import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    keywords?: string;
    schema?: object;
}

export const SEO = ({
    title,
    description,
    canonical = 'https://nvhotech.in',
    ogImage = 'https://nvhotech.in/images/og-image.jpg',
    ogType = 'website',
    keywords = 'software development, web development, mobile app development, AI automation, custom software, India',
    schema,
}: SEOProps) => {
    const fullTitle = `${title} | NVHO Tech`;

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
            <meta name="robots" content="index, follow" />
            <meta name="author" content="NVHO Tech" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
