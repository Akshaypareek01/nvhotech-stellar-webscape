import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const BlogCTA = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/', { state: { scrollTo: '#contact' } });
    };

    return (
        <div className="mt-16 mb-8 p-8 md:p-12 glass rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32 group-hover:bg-purple-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    Ready to Build Something Amazing?
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Let's collaborate to turn your innovative ideas into reality with our expert mobile app and web development services.
                </p>
                <Button
                    onClick={handleContactClick}
                    className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-full group"
                >
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
};
