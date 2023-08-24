import express, { Request, Response } from 'express';
import { BeerModel } from './models/Beer';
import { BeerViewModel } from './viewmodel/BeerViewModel';
import { BeerView } from './views/BeerView';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())

const beerDefaultValue = {
    name_beer: "",
    brand_beer: "",
    price: "",
    quantity: 0,
    description: ""
}

const beerModel = new BeerModel(beerDefaultValue)
const beerViewModel = new BeerViewModel(beerModel)
const viewBeer = new BeerView(beerViewModel)


app.get("/", viewBeer.get.bind(viewBeer))
app.post("/beer", viewBeer.add.bind(viewBeer))

app.listen(PORT, () => {
    console.log("APP RUNNING: http://127.0.0.1:", + PORT)
});