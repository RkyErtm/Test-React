import { IProduct } from "./Product";
export type RootTypeList = {
    Home: undefined; // Home ekranının parametresi yok
    'Product-detail': { data: IProduct }; // Product-detail ekranı için IProduct tipi parametre
}