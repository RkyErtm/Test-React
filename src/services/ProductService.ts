import { faker } from "@faker-js/faker";
import { IProduct } from "../models/Product";

const getFakeProducts = (): Array<IProduct> => {
    const products: Array<IProduct> = [];

    const shuffled = Array.from({ length: 10 }, (_, i) => i).sort(
        () => Math.random() - 0.5,
    );

    shuffled.forEach(id => {
        const images = Array.from({ length: 5 }, () => faker.image.urlPicsumPhotos());

        products.push({
            id,
            name: faker.commerce.product(),
            details: faker.commerce.productDescription(),
            brand: faker.commerce.department(),
            price: faker.commerce.price(),
            images: images,
            review: faker.number.float({ min: 10, max: 100, multipleOf: 0.02 }).toString(),
            reviewDetail: faker.commerce.productMaterial(),
        });
    });
    return products;
}

export const ProductService = {
    getFakeProducts,
};