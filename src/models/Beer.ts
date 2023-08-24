import { MongooseBeerRepository } from "../repostories/MongooseBeerRepository";

interface Beer {
    name_beer: string;
    brand_beer: string;
    price: string;
    quantity: number | null;
    description: string;
}

export class BeerModel {

    private repositoryBeer: MongooseBeerRepository;

    constructor(private props: Beer) {
        this.props = { ...props }

        this.repositoryBeer = new MongooseBeerRepository();
    }

    public set nameBeer(nameBeer: string) {
        this.props.name_beer = nameBeer;
    }

    public set brandBeer(brandBeer: string) {
        this.props.brand_beer = brandBeer;
    }

    public set price(price: string) {
        this.props.price = price;
    }

    public set quantity(quantity: number | null) {
        this.props.quantity = quantity;
    }

    public set description(description: string) {
        this.props.description = description;
    }

    public get nameBeer() {
        return this.props.name_beer;
    }

    public get brandBeer() {
        return this.props.brand_beer;
    }

    public get price() {
        return this.props.price;
    }

    public get quantity() {
        return this.props.quantity;
    }

    public get description() {
        return this.props.description;
    }

    public save(data: Beer) {
        return this.repositoryBeer.create(data);
    }

    public getAll() {
        return this.repositoryBeer.getAll();
    }
} 