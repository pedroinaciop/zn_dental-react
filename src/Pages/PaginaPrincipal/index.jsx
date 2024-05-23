import Produtos from "../../components/Produtos";
import styled from "./PaginaPrincipal.module.css";

const PaginaPrincipal = () => {
    return (
        <main className={styled.containerPrincipal}>
            <h2 className={styled.tituloProdutos}>Os produtos mais vendidos, com ofertas imperdíveis!</h2>
            <Produtos />
        </main>
    )
}

export default PaginaPrincipal;