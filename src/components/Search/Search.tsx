import { useContext, useState } from "react";
import { SearchContainer } from "./style";
import FilteredProducts from "../../utils/FilteredProducts";
import { ProductContext } from "../../context/products";

export default function Search() {
    const { products, setProductsList } = useContext(ProductContext)
    const [searchText, setSearchText] = useState("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        FilteredProducts(searchText, products, setProductsList);
    };

    return (
        <SearchContainer>
            <p>Seja bem-vindo!</p>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="O que você procura?"
                    onChange={(e) => {
                        FilteredProducts(e.target.value, products, setProductsList);
                        setSearchText(e.target.value);
                    }}
                    value={searchText} />
            </form>
        </SearchContainer>
    )
}