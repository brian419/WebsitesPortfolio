import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../utils/mongodb';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { email, password } = req.body;

    const { db } = await connectToDatabase();
    const user = await db.collection('users').findOne({ email });

    if (user) {
        return res.status(400).json({ message: 'A user already exists with this email' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.collection('users').insertOne({ email, password: hashedPassword });

    return res.status(201).json({ message: 'User created successfully' });
};
