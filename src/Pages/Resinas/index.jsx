import Produtos from "../../components/Produtos";
import produtos from "../../json/produtos.json";
import styled from "./Resinas.module.css";

const Resinas = () => {
	const resinas = produtos.filter(produto => (produto.categoria == "Resina"));
	
	return (
		<main>
		 	<h2 className={styled.tituloProdutos}>As melhores resinas com múltiplas cores</h2>
			<Produtos array={resinas} />
		</main>
	)
	
}

export default Resinas;