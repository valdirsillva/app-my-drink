import mongoose, { ConnectOptions } from "mongoose"

export class Database {
    static async _connect() {
        try {
            await mongoose.connect("mongodb://127.0.0.1:27017/db-app-my-drinks")

        } catch (err) {
            console.error('Database connection error', err)
            // Finaliza a aplicação com código de saída 1
            process.exit(1)
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
