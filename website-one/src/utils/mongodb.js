import { MongoClient } from 'mongodb';

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function connectToDatabase() {
    if (!clientPromise) {
        clientPromise = client.connect();
    }
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    return { client, db };
}
