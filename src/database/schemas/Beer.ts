import mongoose from "mongoose";

const beerSchema = new mongoose.Schema({
    name_beer: String,
    brand_beer: String,
    price: String,
    quantity: Number,
    description: String
})

// Definindo um modelo no Mongoose do tipo Cerveja 
const Beer = mongoose.model('Beer', beerSchema);

export { Beer }