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
			<h2 className={styled.titulo_categoria}>As melhores escolhas da categoria "{categoriaProduto}"</h2>
			<Produtos array={arrayCategoria} />
		</main>
	)
}

export default ProdutosCategorias;