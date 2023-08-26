import { Database } from "../database/Database";
import { Beer } from "../database/schemas/Beer";
import { BeerProps, BeerRepository } from "./BeerRepository";

export class MongooseBeerRepository implements BeerRepository {
    constructor() {
        Database._connect()
    }

    async create(data: BeerProps) {
        const beer = new Beer(data)
        await beer.save()
    }

    async getAll(): Promise<BeerProps[] | []> {
        const beers: any = await Beer.find()

        return beers ?? [];
    }
}