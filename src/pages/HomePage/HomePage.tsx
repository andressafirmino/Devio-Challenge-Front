/// <reference types="node" />
import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { CategoriesContainer, HomeContainer, Loading, ProductsContainer, Subtitle, Title } from "./style";
import axios from "axios";
import { CategoryType, ProductType } from "../../protocols";

export default function HomePage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [sideDishes, setSideDishes] = useState([]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/`;
    axios.get(url)
      .then(response => {
        setCategories(response.data.categories);
        setProducts(response.data.products);
        setSideDishes(response.data.sideDish)
      })
      .catch(e => console.log(e.message))
  }, []);
  if (products === undefined || products.length === 0) {
    return <Loading src="https://media.tenor.com/t5DMW5PI8mgAAAAi/loading-green-loading.gif"></Loading>;
}
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
        {products.map((prod, i) => <Product key={i} {...prod} />)}
      </ProductsContainer>
    </HomeContainer>
  )
}