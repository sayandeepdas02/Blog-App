import mongoose, { Schema, Model } from 'mongoose';

export interface IUser {
    _id: string;
    fullName: string;
    email: string;
    salt?: string;
    password?: string;
    profileImageURL: string;
    role: 'USER' | 'ADMIN';
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        salt: { type: String },
        password: { type: String, required: true },
        profileImageURL: { type: String, default: '/images/default.svg' },
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER',
        },
    },
    { timestamps: true }
);

// Prevent overwriting model if already compiled
const User: Model<IUser> =
    mongoose.models.user || mongoose.model<IUser>('user', userSchema);

export default User;
