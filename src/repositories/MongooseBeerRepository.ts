import { Beer } from "../database/schemas/Beer";
import { BeerProps, BeerRepository } from "./BeerRepository";

export class MongooseBeerRepository implements BeerRepository {
    async create(data: BeerProps) {
        const beer = new Beer(data)
        await beer.save()
    }

    async getAll(): Promise<BeerProps[]> {
        const response = await Beer.find()

        return []
    }
}