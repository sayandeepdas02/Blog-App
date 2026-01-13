import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <div className="container relative z-10 mx-auto px-4 text-center max-w-7xl">
                <div className="mx-auto max-w-3xl space-y-8">
                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        The #1 Platform for Founders
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                        Build, Scale, and <br className="hidden sm:inline" />
                        <span className="text-primary">Disrupt the Future.</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
                        The definitive community for startup insights. Read unfiltered stories from verified founders, get funding advice, and master the art of growth.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/signup">
                            <Button size="lg" className="h-12 w-full min-w-[160px] rounded-full px-8 text-base shadow-lg transition-transform hover:scale-105 sm:w-auto">
                                Share Your Journey
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="#latest-posts">
                            <Button size="lg" variant="outline" className="h-12 w-full min-w-[160px] rounded-full px-8 text-base backdrop-blur-sm hover:bg-muted/50 sm:w-auto">
                                Read Latest Blogs
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2563EB" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.9,34.5C59.6,45.9,48.3,55,36.2,63.4C24.1,71.8,11.2,79.5,-2.7,84.1C-16.5,88.7,-31.2,90.2,-44.7,85.1C-58.1,80,-70.3,68.3,-78.8,54.4C-87.3,40.5,-92.1,24.3,-90.6,8.7C-89.1,-6.9,-81.3,-21.9,-71.3,-35.1C-61.4,-48.3,-49.3,-59.7,-36.1,-67.4C-22.9,-75.1,-8.6,-79.1,4.9,-87.6L18.4,-96.1" transform="translate(100 100)" />
                </svg>
            </div>
        </section>
    );
}
