import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { BlogCTA } from '@/components/BlogCTA';

const Blog = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locoRef = useRef<any>(null);
    useSmoothScroll(scrollRef, locoRef);

    return (
        <>
            <SEO
                title="NVHO Tech Blog - Insights on AI, Apps, and Web Development"
                description="Explore the latest insights from Nvhotech Private Ltd on Mobile Apps, Artificial Intelligence, and Web Development. Stay updated with nvhotech.in."
                canonical="https://nvhotech.in/blog"
                keywords="NVHO Tech blog, Nvhotech Private Ltd insights, web development blog, AI trends, mobile app development news"
            />

            <Navigation locoRef={locoRef} />
            <div ref={scrollRef} data-scroll-container className="min-h-screen bg-gradient-hero text-foreground">
                <section className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                            NVHO Tech Insights
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                            Discover the latest trends in technology, from AI innovations to the future of web and mobile development with <strong>Nvhotech Private Ltd</strong>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-20">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="glass rounded-2xl overflow-hidden hover:shadow-neon transition-all duration-300 group">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-muted-foreground mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex gap-2">
                                                {post.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link
                                                to={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-primary font-medium hover:underline"
                                            >
                                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="max-w-4xl mx-auto">
                            <BlogCTA />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Blog;
