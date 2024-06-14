import { useLocation } from "react-router-dom";
import Produtos from "../../components/Produtos";
import produtos from "../../json/produtos.json";

const ProdutosCategorias = () => {	
	const location = useLocation();
	const categoriaProduto = location.pathname.replace("/", "");
	
	const arrayCategoria = produtos.filter(produto => (produto.categoria === categoriaProduto));
	
	return (
		<main>
			<Produtos array={arrayCategoria} />
		</main>
	)
}

export default ProdutosCategorias;