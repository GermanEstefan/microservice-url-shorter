import mongoose from "mongoose";

export const connectToDB = async () => {
    try {

        if (!process.env.DBURI) {
            throw new Error('db uri not is provider');
        }

        await mongoose.connect(process.env.DBURI);
        return 'Db is running';

    } catch (error: any) {
        throw new Error('Error to connect to DB, error:\n' + error);
    }
}

