import Produtos from "../../components/Produtos";
import styled from "./PaginaPrincipal.module.css";
import materiais from "../../json/produtos.json";
import carrossel from "../../assets/images/carrossel/carrossel_1.png" 

const PaginaPrincipal = () => {

    return (
        <main className={styled.containerPrincipal}>
            <h2 className={styled.tituloProdutos}>Os produtos mais vendidos, com ofertas imperdíveis!</h2>
            <Produtos array={materiais} />
        </main>
    )
}

export default PaginaPrincipal;