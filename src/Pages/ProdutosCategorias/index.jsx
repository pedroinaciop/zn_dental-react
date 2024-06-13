import Produtos from "../../components/Produtos";
import produtos from "../../json/produtos.json";

const ProdutosCategorias = () => {	
	const categoriaProduto = location.pathname.replace("/", "");
	
	const arrayCategoria = produtos.filter(produto => (produto.categoria === categoriaProduto));
	
	return (
		<main>
			<Produtos array={arrayCategoria} />
		</main>
	)
}

export default ProdutosCategorias;