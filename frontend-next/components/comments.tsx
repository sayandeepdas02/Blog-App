'use client';

import { IComment } from '@/lib/models/comment';
import { IUser } from '@/lib/models/user';
import { formatDistanceToNow } from 'date-fns';
import { Button } from './ui/button';
import { Input } from './ui/input'; // You might want a Textarea here eventually
import { useState } from 'react';

interface CommentsProps {
    blogId: string;
    comments: IComment[];
    user?: IUser | null;
}

export function Comments({ blogId, comments, user }: CommentsProps) {
    // We'll use a simple form action to backend for now, or fetch.
    // Since we are "no backend changes", we should probably POST to the existing backend route: /blog/comment/:blogId
    // But that route redirects. A form POST will work fine and redirect back.

    return (
        <section className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

            {user ? (
                <form action={`http://localhost:8000/blog/comment/${blogId}`} method="POST" className="mb-8 flex gap-4">
                    <Input
                        name="content"
                        placeholder="Add a comment..."
                        className="flex-1"
                        required
                    />
                    <Button type="submit">Post</Button>
                </form>
            ) : (
                <div className="mb-8 p-4 border rounded bg-muted/50 text-center">
                    <p className="text-sm text-muted-foreground">Please sign in to leave a comment.</p>
                </div>
            )}

            <div className="space-y-6">
                {comments.map((comment) => {
                    const author = comment.createdBy as IUser;
                    return (
                        <div key={comment._id.toString()} className="flex gap-4">
                            <img
                                src={author.profileImageURL || '/images/default.svg'}
                                alt={author.fullName}
                                className="h-10 w-10 rounded-full border"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-sm">{author.fullName}</span>
                                    <span className="text-xs text-muted-foreground">
                                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed">{comment.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
