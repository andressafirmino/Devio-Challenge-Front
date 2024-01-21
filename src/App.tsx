import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { AppContainer } from "./app";
import ProductProvider from "./context/products";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App;