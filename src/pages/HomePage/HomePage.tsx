import Category from "../../components/Category/Category";
import Search from "../../components/Search/Search";
import { CategoriesContainer, HomeContainer, Subtitle, Title } from "./style";

export default function HomePage() {

    const categories = [
        {
            "id": 1,
            "name": "Combos",
            "image": "https://lecard-cdn.nyc3.cdn.digitaloceanspaces.com/upload/8621b82c62952338afb2ca82bb3c9cf3.png",
            "category": "COMBO"
        },
        {
            "id": 2,
            "name": "Hambúrgueres",
            "image": "https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png",
            "category": "SNACK"
        },
        {
            "id": 3,
            "name": "Bebidas",
            "image": "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/texaslanches/141_5870274644f2a.png",
            "category": "DRINK"
        },
        {
            "id": 4,
            "name": "Acompanhamentos",
            "image": "https://static.vecteezy.com/system/resources/thumbnails/025/065/286/small/french-fries-with-ai-generated-free-png.png",
            "category": "SIDE-DISH"
        },
        {
            "id": 5,
            "name": "Sobremesas",
            "image": "https://static.vecteezy.com/system/resources/previews/021/217/130/original/petit-gateau-dessert-png.png",
            "category": "DESSERT"
        }
    ]
    return (
        <HomeContainer>
            <Search />
            <Title>Categorias</Title>
            <Subtitle>Navegue por categoria</Subtitle>
            <CategoriesContainer>
                {categories.map((cat, i) => <Category key={i} {...cat} />)}
            </CategoriesContainer>
        </HomeContainer>
    )
}