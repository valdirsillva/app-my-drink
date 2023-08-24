import mongoose, { ConnectOptions } from "mongoose"

export class Database {
    static async _connect() {

        try {
            await mongoose.connect("mongodb://127.0.0.1:27017//db-app-my-drinks", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions)
        } catch (err) {

            console.error('Database connection error', err)
            process.exit(0);
        }
    }

    static getConnectionStatus() {
        const connectionState = mongoose.connection.readyState
        switch (connectionState) {
            case 0:
                return 'Desconectado';
            case 1:
                return 'Conectando';
            case 2:
                return 'Conectado';
            case 3:
                return 'Desconectando';
            default:
                return 'Estado inválido';
        }
    }
}  