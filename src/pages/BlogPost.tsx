import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { BlogCTA } from '@/components/BlogCTA';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);
    const scrollRef = useRef<HTMLDivElement>(null);
    const locoRef = useRef<any>(null);
    useSmoothScroll(scrollRef, locoRef);

    useEffect(() => {
        if (!post) {
            // Redirect to 404 or blog index if post not found
            // For now, just navigate to blog index
            toast.error("Blog post not found");
            navigate('/blog');
        }
    }, [post, navigate]);

    if (!post) return null;

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
    };

    return (
        <>
            <SEO
                title={`${post.title} - NVHO Tech Blog`}
                description={post.excerpt}
                canonical={`https://nvhotech.in/blog/${post.slug}`}
                ogType="article"
            />

            <Navigation locoRef={locoRef} />
            <div ref={scrollRef} data-scroll-container className="min-h-screen bg-gradient-hero text-foreground">
                <article className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>

                        <div className="mb-8">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-between border-y border-white/10 py-6 mb-8">
                                <div className="flex items-center gap-6 text-muted-foreground">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <User className="w-5 h-5" />
                                        {post.author}
                                    </span>
                                </div>
                                <Button variant="ghost" size="icon" onClick={handleShare} className="hover:bg-primary/20">
                                    <Share2 className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        <div className="glass rounded-3xl overflow-hidden mb-12">
                            <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="w-full h-auto max-h-[500px] object-cover"
                            />
                        </div>

                        {/* Content Injection */}
                        <div
                            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary prose-strong:font-bold"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* CTA Section */}
                        <BlogCTA />

                    </div>
                </article>

                <Footer />
            </div>
        </>
    );
};

export default BlogPost;
