/// <reference types="node" />
import { useContext, useEffect } from "react";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { CategoriesContainer, HomeContainer, Loading, ProductsContainer, Subtitle, Title } from "./style";
import axios from "axios";
import { ProductContext } from "../../context/products";
import ProductDetail from "../../components/ ProductDetails/ ProductDetails";
import { ProductType } from "../../protocols";
import SummaryTotal from "../../components/SummaryTotal/SummaryTotal";
import FinalizeOrder from "../../components/FinalizeOrder/FinalizeOrder";
import Payment from "../../components/Payment/Payment";

export default function HomePage() {
  const { categories, setCategories, products, setProducts, setSideDishes, productsList, selectedProduct, selected, finish } = useContext(ProductContext);

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
      {!finish && (
        <>
          {selected && (<ProductDetail {...selectedProduct as ProductType} />)}
          <Search />
          <Title>Categorias</Title>
          <Subtitle>Navegue por categoria</Subtitle>
          <CategoriesContainer>
            {categories.map((cat, i) => <Category key={i} {...cat} />)}
          </CategoriesContainer>
          <Title>Produtos</Title>
          <Subtitle>Selecione um produto para adicionar ao seu pedido</Subtitle>
          <ProductsContainer>
            {productsList.length > 0 && (productsList.map((prod, i) => <Product key={i} {...prod} />))}
            {productsList.length === 0 && (products.map((prod, i) => <Product key={i} {...prod} />))}
          </ProductsContainer>
          <SummaryTotal />
          <FinalizeOrder />
        </>
      )}
      {finish && (<Payment />)}
    </HomeContainer>
  )
}