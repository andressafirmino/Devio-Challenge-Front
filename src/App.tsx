import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { AppContainer } from "./app";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App;