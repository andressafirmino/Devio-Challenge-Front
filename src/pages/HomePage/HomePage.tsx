import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { CategoriesContainer, HomeContainer, ProductsContainer, Subtitle, Title } from "./style";

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
    const productsList = [
        {
          "id": 1,
          "name": "X-burguer",
          "price": 3400,
          "description": "Hambúguer, pão, cebola, queijo, alface e tomate",
          "image": "https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png",
          "category": "SNACK"
        },
        {
          "id": 2,
          "name": "Coca-cola",
          "price": 400,
          "description": "350 ml",
          "image": "https://w7.pngwing.com/pngs/922/962/png-transparent-coca-cola-fizzy-drinks-diet-coke-fanta-coca-cola-cola-cola-wars-aluminum-can.png",
          "category": "DRINK"
        },
        {
          "id": 3,
          "name": "Combo x-burguer",
          "price": 4400,
          "description": "1 x-buguer, 1 batata-frita pequena e um refrigerante de 350ml",
          "image": "https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png",
          "category": "COMBO"
        },
        {
          "id": 4,
          "name": "Pudim",
          "price": 1000,
          "description": "Pudim de doce de leite",
          "image": "https://www.designi.com.br/images/preview/11205671.jpg",
          "category": "DESSERT"
        },
        {
          "id": 5,
          "name": "Batata-frita",
          "price": 800,
          "description": "Pequena",
          "image": "https://img.freepik.com/psd-premium/batatas-fritas-isoladas-em-fundo-transparente-png-psd_888962-658.jpg",
          "category": "SIDE-DISH"
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
            <Title>Produtos</Title>
            <Subtitle>Selecione um produto para adicionar ao seu pedido</Subtitle>
        <ProductsContainer>
        {productsList.map((prod, i) => <Product key={i} {...prod} />)}
        </ProductsContainer>
        </HomeContainer>
    )
}