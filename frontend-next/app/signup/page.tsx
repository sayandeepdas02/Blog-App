'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Lock } from 'lucide-react';

export default function Signup() {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Hero/Brand */}
            <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-5xl font-bold mb-6">Start Building</h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed">
                        "Make something people want."
                    </p>
                    <p className="mt-4 font-medium">— Paul Graham</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 bg-background">
                <div className="w-full max-w-[400px] space-y-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                        <h2 className="text-3xl font-bold tracking-tight">Create an account</h2>
                        <p className="text-muted-foreground mt-2">Join thousands of writers sharing their stories.</p>
                    </div>

                    <form action="/api/proxy/user/signup" method="POST" className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="fullName" name="fullName" type="text" placeholder="John Doe" className="pl-10 h-10 border-muted-foreground/20 focus-visible:ring-primary" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="email" name="email" type="email" placeholder="name@example.com" className="pl-10 h-10 border-muted-foreground/20 focus-visible:ring-primary" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="password" name="password" type="password" className="pl-10 h-10 border-muted-foreground/20 focus-visible:ring-primary" required />
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-11 text-base font-semibold shadow-lg shadow-primary/20">Create Account</Button>
                    </form>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/signin" className="underline underline-offset-4 hover:text-primary font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
