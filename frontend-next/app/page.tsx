import { Navbar } from '@/components/navbar';
import connectToDatabase from '@/lib/db';
import Blog from '@/lib/models/blog';
import { getUser } from '@/lib/auth';
import { BlogCard } from '@/components/blog-card';
import { Button } from '@/components/ui/button';
import '../lib/models/user';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export const dynamic = 'force-dynamic';

export default async function Home() {
    await connectToDatabase();
    const user = await getUser();

    // Fetch blogs and populate author
    const blogs = await Blog.find({}).populate('createdBy').sort({ createdAt: -1 });

    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
            <Navbar user={user} />

            <main className="flex-1">
                <Hero />

                <div id="features">
                    <Features />
                </div>

                <section id="latest-posts" className="py-24 container mx-auto px-4 max-w-7xl scroll-mt-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold tracking-tight">Latest Stories</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog._id.toString()} blog={JSON.parse(JSON.stringify(blog))} />
                        ))}
                    </div>

                    {blogs.length === 0 && (
                        <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed">
                            <p className="text-muted-foreground mb-4">No posts yet.</p>
                            <Button variant="outline">Write the first story</Button>
                        </div>
                    )}
                </section>

                <div id="testimonials">
                    <Testimonials />
                </div>
            </main>

            <Footer />
        </div>
    );
}
