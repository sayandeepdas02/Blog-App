import mongoose, { Schema, Model, Types } from 'mongoose';
import { IUser } from './user';
import { IBlog } from './blog';

export interface IComment {
    _id: string;
    content: string;
    blogId: Types.ObjectId | IBlog;
    createdBy: Types.ObjectId | IUser;
    createdAt: Date;
    updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
    {
        content: { type: String, required: true },
        blogId: {
            type: Schema.Types.ObjectId,
            ref: 'blog',
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    { timestamps: true }
);

const Comment: Model<IComment> =
    mongoose.models.comment || mongoose.model<IComment>('comment', commentSchema);

export default Comment;
