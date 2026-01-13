import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import { IUser } from './models/user';

const SECRET = "Superman@123"; // Hardcoded matching backend

export async function getUser(): Promise<IUser | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return null;

    try {
        const decoded = verify(token, SECRET) as IUser;
        return decoded;
    } catch (err) {
        return null;
    }
}
