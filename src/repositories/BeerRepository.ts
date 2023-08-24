export interface BeerProps {
    name_beer: string;
    brand_beer: string;
    price: string;
    quantity: number | null;
    description: string;
}


export interface BeerRepository {
    create: (data: BeerProps) => Promise<void>;
    getAll: () => Promise<BeerProps[]>
}
