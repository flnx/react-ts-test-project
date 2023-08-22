import { ReactElement, createContext, useEffect, useState } from 'react';

export type ProductType = {
    sku: string;
    name: string;
    price: number;
};

const initState: ProductType[] = [];

export type UseProductsContextType = {
    products: ProductType[];
};

const initContextState: UseProductsContextType = {
    products: [],
};

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = {
    children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState);

    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            try {
                const data = await fetch('http://localhost:3500/products');
                const res = await data.json();

                return res;
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err.message);
                }

                throw err;
            }
        };

        fetchProducts()
            .then((products) => setProducts(products))
            .catch((err) => console.error(err.message));
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;
