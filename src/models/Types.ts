import { IProduct } from "./Product";

export type RootStackParamList = {
    Home: undefined; // Home ekranının parametresi yok
    'Product-detail': { data: IProduct }; // Product-detail ekranı için IProduct tipi parametre
};