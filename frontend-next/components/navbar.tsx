import Link from 'next/link';
import { Button } from './ui/button';
import { PenTool, LogIn, UserPlus, Menu, Star } from 'lucide-react';

interface NavbarProps {
    user?: {
        fullName: string;
        profileImageURL: string;
    } | null;
}

export function Navbar({ user }: NavbarProps) {
    return (
        <div className="w-full relative z-50">
            {/* Top Announcement Bar */}
            <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                Stay updated with all latest startup news!
            </div>

            {/* Main Navbar */}
            <nav className="w-full border-b bg-background">
                <div className="container mx-auto px-4 max-w-7xl h-20 flex items-center justify-between">

                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center group">
                        <img src="/images/logo.png" alt="Blogify Logo" className="h-10 w-auto object-contain" />
                    </Link>

                    {/* Centered Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-base font-medium text-muted-foreground">
                        <Link href="/#features" className="hover:text-primary hover:font-semibold transition-all">Features</Link>
                        <Link href="/#latest-posts" className="hover:text-primary hover:font-semibold transition-all">Latest Blogs</Link>
                        <Link href="/about" className="hover:text-primary hover:font-semibold transition-all">About Us</Link>
                        <Link href="/#testimonials" className="hover:text-primary hover:font-semibold transition-all">Testimonials</Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                <Link href="/blog/create" className="hidden sm:block">
                                    <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-semibold">
                                        <PenTool className="h-4 w-4 mr-2" />
                                        Write
                                    </Button>
                                </Link>

                                <div className="flex items-center gap-3 pl-4 border-l">
                                    <img src={user.profileImageURL} alt={user.fullName} className="h-9 w-9 rounded-full border-2 border-primary/20" />
                                    <form action="/api/proxy/user/logout" method="GET">
                                        <Button variant="ghost" size="sm" type="submit" className="text-muted-foreground hover:text-destructive">
                                            Log out
                                        </Button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/signin">
                                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white min-w-[100px] font-semibold">
                                        Log In
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="bg-primary hover:bg-primary/90 text-white min-w-[100px] font-semibold shadow-md">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        )}

                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6 text-primary" />
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
