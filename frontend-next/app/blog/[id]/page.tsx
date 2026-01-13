import { Navbar } from '@/components/navbar';
import connectToDatabase from '@/lib/db';
import Blog from '@/lib/models/blog';
import Comment from '@/lib/models/comment';
import { getUser } from '@/lib/auth';
import { Comments } from '@/components/comments';
import { IUser } from '@/lib/models/user';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import '@/lib/models/user'; // Register User model

export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function BlogDetail({ params }: PageProps) {
    const { id } = await params;
    await connectToDatabase();
    const user = await getUser();

    let blog;
    try {
        blog = await Blog.findById(id).populate('createdBy');
    } catch (e) {
        notFound();
    }

    if (!blog) return notFound();

    const comments = await Comment.find({ blogId: id }).populate('createdBy').sort({ createdAt: -1 });
    const author = blog.createdBy as IUser;

    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground pb-20">
            <Navbar user={user} />

            <main className="container mx-auto px-4 py-8 max-w-3xl">
                <article className="prose dark:prose-invert lg:prose-xl mx-auto">
                    <header className="mb-8 not-prose text-center">
                        {blog.coverImageURL && (
                            <div className="mb-8 rounded-xl overflow-hidden shadow-sm aspect-video w-full">
                                <img
                                    src={blog.coverImageURL}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl mb-4 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <img
                                    src={author.profileImageURL}
                                    alt={author.fullName}
                                    className="h-8 w-8 rounded-full border"
                                />
                                <span className="font-medium text-foreground">{author.fullName}</span>
                            </div>
                            <span>•</span>
                            <time dateTime={new Date(blog.createdAt).toISOString()}>
                                {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
                            </time>
                        </div>
                    </header>

                    <div className="whitespace-pre-wrap leading-relaxed text-lg text-foreground/90">
                        {blog.body}
                    </div>
                </article>

                <div className="my-16 border-t" />

                <Comments blogId={id} comments={JSON.parse(JSON.stringify(comments))} user={user} />
            </main>
        </div>
    );
}
