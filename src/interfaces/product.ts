
export interface IProductBackend{
    _id: string;
    name: string;
    description: string;
    price: number;
    type: string;
    percentageC: number;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
}