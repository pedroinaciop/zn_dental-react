import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./Pages/PaginaPrincipal";
import NaoEncontrada from "./Pages/NaoEncontrada";
import Header from "./components/Header";
import Cadastro from "./Pages/Cadastro";
import Carrinho from "./Pages/Carrinho";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element={<PaginaPrincipal />} />
        <Route path="*" element={<NaoEncontrada />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
