import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = process.env.MONGO_DB_URL || process.env.MONGO_URI || 'mongodb://localhost:27017/beon';

// const MONGO_DB_URL = "mongodb://0.0.0.0:27017/beon";

const connectToDatabase = (
  mongoDatabaseURI: string = MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
