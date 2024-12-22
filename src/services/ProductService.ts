import { faker } from "@faker-js/faker";
import { IProduct } from "../models/Product";

const getFakeProducts = (): Array<IProduct> => {
    const products: Array<IProduct> = [];

    const shuffled = Array.from({ length: 11 }, (_, i) => i).sort(
        () => Math.random() - 0.5,
    );

    shuffled.forEach(id => {
        products.push({
            id,
            name: faker.commerce.product(),
            brand: faker.commerce.department(),
            price: faker.commerce.price(),
            image: faker.image.urlPicsumPhotos(),
        });
    });
    return products;
}

export const ProductService = {
    getFakeProducts,
};