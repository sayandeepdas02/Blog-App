import { Card, CardContent } from "./ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Blogify is the TechCrunch for the next generation. It's where I go to find real, raw founder stories.",
        author: "Alex Rivera",
        role: "Founder, ScaleAI",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
        quote: "The fundraising insights I found here helped us close our Series A. Invaluable resource.",
        author: "Priya M.",
        role: "CEO, FinFlow",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
        quote: "Finally, a platform that cuts through the noise. No fluff, just hard-learned startup lessons.",
        author: "David Chen",
        role: "Partner, Sequoia",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted by Builders</h2>
                    <p className="text-lg text-muted-foreground">
                        Join thousands of entrepreneurs who start their day with Blogify.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-muted/20 border-border/50">
                            <CardContent className="pt-8">
                                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                <p className="text-lg mb-6 leading-relaxed italic text-foreground/80">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.avatar} alt={t.author} className="h-10 w-10 rounded-full border bg-background" />
                                    <div>
                                        <p className="font-semibold text-sm">{t.author}</p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
