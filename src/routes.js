import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdutosCategorias from "./Pages/ProdutosCategorias";
import PaginaPrincipal from "./Pages/PaginaPrincipal";
import PaginaProdutos from "./Pages/PaginaProdutos";
import NaoEncontrada from "./Pages/NaoEncontrada";
import Cadastro from "./Pages/Cadastro";
import Carrinho from "./Pages/Carrinho";
import PaginaBase from "./Pages/PaginaBase";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>        
          <Route index element={<PaginaPrincipal />} />
          <Route path="cadastro" element={<Cadastro/>} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route path="produto/:id" element={<PaginaProdutos />} /> 
          <Route path="Resinas" element={<ProdutosCategorias />} />
          <Route path="Laboratorio" element={<ProdutosCategorias />} />
          <Route path="Equipamentos" element={<ProdutosCategorias />} />
          <Route path="Descartaveis" element={<ProdutosCategorias />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;