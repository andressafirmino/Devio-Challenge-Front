import { ReactNode, createContext, useState } from "react";
import { AdditionalType, CartOrEmpty, CategoryType, ProductOrEmpty, ProductType, SideDishType } from "../protocols";

interface ProductContextProps {
    categories: CategoryType[];
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    products: ProductType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    sideDishes: SideDishType[];
    setSideDishes: React.Dispatch<React.SetStateAction<SideDishType[]>>;
    productsList: ProductType[];
    setProductsList: React.Dispatch<React.SetStateAction<ProductType[]>>;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
    selectedProduct: ProductOrEmpty;
    setSelectedProduct: React.Dispatch<React.SetStateAction<ProductOrEmpty>>;
    cartProducts: CartOrEmpty[];
    setCartProducts: React.Dispatch<React.SetStateAction<CartOrEmpty[]>>;
    additionalTotal: AdditionalType[];
    setAdditionalTotal: React.Dispatch<React.SetStateAction<AdditionalType[]>>;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    disabled: boolean;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    finish: boolean;
    setFinish: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext<ProductContextProps>({
    categories: [],
    setCategories: () => { },
    products: [],
    setProducts: () => { },
    sideDishes: [],
    setSideDishes: () => { },
    productsList: [],
    setProductsList: () => { },
    selected: false,
    setSelected: () => { },
    selectedProduct: {},
    setSelectedProduct: () => { },
    cartProducts: [],
    setCartProducts: () => { },
    additionalTotal: [],
    setAdditionalTotal: () => { },
    total: 0,
    setTotal: () => { },
    disabled: true,
    setDisabled: () => { },
    finish: false,
    setFinish: () => { },
});

interface ProductProviderProps {
    children: ReactNode;
}

export default function ProductProvider({ children }: ProductProviderProps) {

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [sideDishes, setSideDishes] = useState<SideDishType[]>([]);
    const [productsList, setProductsList] = useState<ProductType[]>([]);
    const [selected, setSelected] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductOrEmpty>({});
    const [cartProducts, setCartProducts] = useState<CartOrEmpty[]>([]);
    const [additionalTotal, setAdditionalTotal] = useState<AdditionalType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [finish, setFinish] = useState<boolean>(false);

    return (
        <ProductContext.Provider value={{
            categories, setCategories,
            products, setProducts,
            sideDishes, setSideDishes,
            productsList, setProductsList,
            selected, setSelected,
            selectedProduct, setSelectedProduct,
            cartProducts, setCartProducts,
            additionalTotal, setAdditionalTotal,
            total, setTotal,
            disabled, setDisabled,
            finish, setFinish
        }}>
            {children}
        </ProductContext.Provider>
    )
}