import type { FAQItem } from '@/lib/seoSchemas';

interface FAQSectionProps {
    faqs: FAQItem[];
    heading?: string;
    /** Optional intro line under the heading */
    intro?: string;
}

/**
 * AEO-optimized FAQ block: question as a real heading, direct answer
 * immediately below in plain text. Pair with faqSchema(faqs) passed to <SEO />
 * so the visible content and the FAQPage structured data always match.
 */
export const FAQSection = ({ faqs, heading = 'Frequently Asked Questions', intro }: FAQSectionProps) => {
    if (!faqs.length) return null;

    return (
        <section className="py-16 px-6 bg-background/50" aria-labelledby="faq-heading">
            <div className="container mx-auto max-w-4xl">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {heading}
                </h2>
                {intro && (
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        {intro}
                    </p>
                )}
                <div className={`space-y-6 ${intro ? '' : 'mt-12'}`}>
                    {faqs.map(({ question, answer }) => (
                        <div key={question} className="glass p-6 md:p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-3 text-primary">{question}</h3>
                            <p className="text-muted-foreground leading-relaxed">{answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
