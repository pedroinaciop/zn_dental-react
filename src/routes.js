import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import PaginaPrincipal from "./Pages/PaginaPrincipal";
import NaoEncontrada from "./Pages/NaoEncontrada";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cadastro from "./Pages/Cadastro";
import Carrinho from "./Pages/Carrinho";
import Post from "./Pages/Post";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <CarrinhoProvider>

      <Header />

      <Routes>
        <Route path="" element={<PaginaPrincipal />} />
        <Route path="*" element={<NaoEncontrada />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/produto/:id" element={<Post />} /> 
      </Routes>
      
      <Footer />
      
    </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default App;