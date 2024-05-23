import Produtos from "../../components/Produtos";
import styled from "./PaginaPrincipal.module.css";

const PaginaPrincipal = () => {
    return (
        <main className={styled.containerPrincipal}>
            <Produtos />
        </main>
    )
}

export default PaginaPrincipal;