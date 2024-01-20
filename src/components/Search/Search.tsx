import { useState } from "react";
import { SearchContainer } from "./style";

export default function Search() {
    const [searchText, setSearchText] = useState("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e)
    };

    return (
        <SearchContainer>
            <p>Seja bem-vindo!</p>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="O que você procura?"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    value={searchText} />
            </form>
        </SearchContainer>
    )
}