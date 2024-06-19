import styled from "./ProdutosCategorias.module.css";
import Produtos from "../../components/Produtos";
import produtos from "../../json/produtos.json";
import { useLocation } from "react-router-dom";

const ProdutosCategorias = () => {	
	const location = useLocation();
	const categoriaProduto = location.pathname.replace("/", "");
	
	const arrayCategoria = produtos.filter(produto => (produto.categoria === categoriaProduto));
	
	return (
		<main className={styled.containerPrincipal}>
			<Produtos array={arrayCategoria} />
		</main>
	)
}

export default ProdutosCategorias;