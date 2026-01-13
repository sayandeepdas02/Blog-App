
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Facebook, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo.png"
                                alt="Blogify Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Empowering the next generation of founders and creators. Join our community to build, scale, and disrupt.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="#" icon={Twitter} label="Twitter" />
                            <SocialLink href="#" icon={Github} label="GitHub" />
                            <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-6">Product</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="#features">Features</FooterLink>
                            <FooterLink href="#latest-posts">Latest Stories</FooterLink>
                            <FooterLink href="#testimonials">Success Stories</FooterLink>
                            <FooterLink href="/pricing">Pricing</FooterLink>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/careers">Careers</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-6">Stay Updated</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for the latest startup insights and growth hacks.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                            />
                            <Button size="icon" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Blogify Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
        >
            <Icon className="h-4 w-4" />
        </a>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-muted-foreground hover:text-primary transition-colors block">
                {children}
            </Link>
        </li>
    )
}


