'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';

// Since this is a client page, we can't easily get the user server-side and pass it down 
// without layout tricks or fetching. For now, we assume the middleware protects it.
// We can fetch user or just rely on the Navbar to handle "loading" user state if we used a context.
// But Navbar expects a user prop. 
// Ideally we should have a Layout that fetches the user. 
// For this page, let's keep it simple. The Navbar might show "Sign In" briefly or we can skip passing user
// if we don't have it easily. OR we fetch it.

export default function CreateBlog() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch('/api/proxy/blog', {
                method: 'POST',
                body: formData,
            });

            if (res.ok && res.url.includes('/blog/')) {
                // Backend redirects to /blog/:id
                // We can parse the URL to get the ID, or just navigate to home if unsure.
                // But fetch might just give us the final HTML of the blog page.
                // So we should simpler redirect to Home or try to find where we ended up.
                // Actually, if we use a proxy, the res.url will catch the final destination.

                // Let's assume success and go home for now, or back to the new blog.
                // Since we don't easily know the new ID from a 302 follower response content (it's HTML),
                // unless we check the URL.

                const newPath = new URL(res.url).pathname; // Expected /blog/123...
                router.push(newPath || '/');
                router.refresh();
            } else {
                router.push('/');
                // Fallback
            }
        } catch (err) {
            console.error(err);
            setError('Failed to create post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* 
         We are not passing user to Navbar here because it's a client component.
         In a real app we'd use a server layout or context. 
         For now, cleaner to just wrap the content.
       */}
            <nav className="border-b bg-background/95 backdrop-blur h-14 flex items-center px-4 md:container md:mx-auto">
                <span className="font-bold">Blogify Writer</span>
            </nav>

            <main className="container mx-auto px-4 py-8 max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Create New Post</CardTitle>
                        <CardDescription>Share your thoughts with the world</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Cover Image</label>
                                <Input type="file" name="coverImage" accept="image/*" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Title</label>
                                <Input name="title" placeholder="Enter an engaging title" required className="text-lg font-semibold" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Content</label>
                                <textarea
                                    name="body"
                                    className="flex min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Write your story..."
                                    required
                                />
                            </div>

                            {error && <p className="text-destructive text-sm">{error}</p>}

                            <div className="flex justify-end gap-4">
                                <Button variant="outline" type="button" onClick={() => router.back()}>Cancel</Button>
                                <Button type="submit" disabled={loading}>
                                    {loading ? 'Publishing...' : 'Publish'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
