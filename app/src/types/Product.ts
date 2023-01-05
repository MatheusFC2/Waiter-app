/* eslint-disable linebreak-style */
/* eslint-disable indent */
export interface Product {
    _id: string;
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: {
        name: string;
        icon: string;
        _id: string;
    }[];
}
