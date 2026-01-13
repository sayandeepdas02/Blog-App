import { Zap, Shield, Users, Globe, PenTool, Layout } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "Growth Tactics",
        description: "Actionable strategies for 0 to 1 and beyond. Learn from those who've done it."
    },
    {
        icon: Users,
        title: "Founder Network",
        description: "Connect with verified founders, angels, and VCs in our exclusive circle."
    },
    {
        icon: Shield,
        title: "Fundraising Intel",
        description: "Pitch deck breakdowns, valuation data, and investor lists."
    },
    {
        icon: PenTool,
        title: "Deep Dives",
        description: "Long-form essays on product market fit, retention, and monetization."
    },
    {
        icon: Layout,
        title: "Market Trends",
        description: "Stay ahead of the curve with data-driven analysis of emerging markets."
    },
    {
        icon: Globe,
        title: "Global Unicorns",
        description: "Case studies on how the world's biggest startups conquered new regions."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">The Toolkit for Unicorns</h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to navigate the chaotic journey of building a company.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
