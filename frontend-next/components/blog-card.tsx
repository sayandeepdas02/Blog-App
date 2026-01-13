import Link from 'next/link';
import { IBlog } from '@/lib/models/blog';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { IUser } from '@/lib/models/user';
import { formatDistanceToNow } from 'date-fns';

interface BlogCardProps {
    blog: IBlog;
}

export function BlogCard({ blog }: BlogCardProps) {
    const author = blog.createdBy as IUser;

    return (
        <Link href={`/blog/${blog._id}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-md hover:border-primary/50 group">
                <div className="aspect-video w-full overflow-hidden bg-muted relative">
                    {blog.coverImageURL ? (
                        <img
                            src={blog.coverImageURL}
                            alt={blog.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                            No Image
                        </div>
                    )}
                </div>
                <CardContent className="p-4">
                    <h3 className="line-clamp-2 text-xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {blog.title}
                    </h3>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                        {/* Simple body truncate if needed, or rely on line-clamp */}
                        {blog.body}
                    </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        {author?.profileImageURL && (
                            <img src={author.profileImageURL} alt={author.fullName} className="h-6 w-6 rounded-full" />
                        )}
                        <span>{author?.fullName || 'Unknown Author'}</span>
                    </div>
                    {/* <span>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</span> */}
                    {/* Need date-fns, but for now just basic date */}
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </CardFooter>
            </Card>
        </Link>
    );
}
