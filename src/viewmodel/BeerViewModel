import { BeerModel } from '../models/Beer'
import { BeerProps } from '../repositories/BeerRepository';

export class BeerViewModel {
    private beerModel: BeerModel;

    constructor(beerModel: BeerModel) {
        this.beerModel = beerModel;
    }

    public get() {
        return this.beerModel.getAll();
    }

    public add(data: BeerProps) {
        return this.beerModel.save(data);
    }
}