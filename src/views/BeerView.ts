import { Request, Response } from 'express';
import { BeerViewModel } from '../viewmodel/BeerViewModel'

export class BeerView {
    private beerViewModel: BeerViewModel;

    constructor(beerViewModel: BeerViewModel) {
        this.beerViewModel = beerViewModel;
    }

    public async get(request: Request, response: Response) {
        try {
            const beers = await this.beerViewModel.get();
            response.status(200).send(beers)
        } catch (err) {
            console.error(err)
        }
    }

    public async add(request: Request, response: Response) {
        try {
            const data = request.body
            const res = await this.beerViewModel.add(data);
            response.status(200).send(res)
        } catch (err) {
            response.status(404).send({ error: err })
            console.error(err)
        }
    }
}