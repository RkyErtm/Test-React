import { faker } from "@faker-js/faker";
import { ICategory } from "../models/Category";

const getFakeCategories = () => {
    const categories: Array<ICategory> = [];

    const uniqueIds = Array.from({ length: 11 }, (_, i) => i).sort(
        () => Math.random() - 0.5,
    );

    uniqueIds.forEach(id => {
        categories.push({
            id,
            title: faker.commerce.product(),
        });
    });

    return categories;
};
export const CategoryService = {
    getFakeCategories
}