import { useContext, useEffect } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    const { quantidade, setQuantidade } = useContext(CarrinhoContext);
    const { totalCarrinho, setTotalCarrinho } = useContext(CarrinhoContext);

    function AdicionarAoCarrinho(item, quantidade) {
        const novoCarrinho = [...carrinho];
        const existindoIdProduto = novoCarrinho.findIndex( (i) => i.id === item.id,);

        if (existindoIdProduto === -1) {
            setCarrinho([...novoCarrinho, { ...item, quantidade }]);
        } else {
            novoCarrinho[existindoIdProduto].quantidade += quantidade;
            setCarrinho(novoCarrinho);
        }
    }

    function removerDoCarrinho(produto) {
        const index = carrinho.findIndex(item => item.id === produto.id);
        if (index !== -1) {
            const novoCarrinho = [...carrinho];
            novoCarrinho.splice(index, 1);
            setCarrinho(novoCarrinho);
        }
    }

    useEffect(() => {
        const novoTotalCarrinho = carrinho.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0);
        setTotalCarrinho(novoTotalCarrinho);
    }, [carrinho]);

    const handleChange = () => {
        return null;
    };
    
    return {
        carrinho, 
        setCarrinho,
        quantidade,
        setQuantidade,
        AdicionarAoCarrinho,
        removerDoCarrinho,
        totalCarrinho,
        handleChange
    };
};
