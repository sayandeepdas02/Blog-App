import mongoose, { Schema, Model, Types } from 'mongoose';
import { IUser } from './user';

export interface IBlog {
    _id: string;
    title: string;
    body: string;
    coverImageURL?: string;
    createdBy: Types.ObjectId | IUser; // Populated or ID
    createdAt: Date;
    updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        coverImageURL: { type: String },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    { timestamps: true }
);

const Blog: Model<IBlog> =
    mongoose.models.blog || mongoose.model<IBlog>('blog', blogSchema);

export default Blog;
