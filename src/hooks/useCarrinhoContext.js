import { useContext, useEffect } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import Swal from "sweetalert2";

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    const { quantidade, setQuantidade } = useContext(CarrinhoContext);
    const { totalCarrinho, setTotalCarrinho } = useContext(CarrinhoContext);

    function AdicionarAoCarrinho(item, quantidade) {        
        const novoCarrinho = [...carrinho];
        const existindoIdProduto = novoCarrinho.findIndex((i) => i.id === item.id);

        if (existindoIdProduto === -1) {
            setCarrinho([...novoCarrinho, { ...item, quantidade }]);
        } else {
            novoCarrinho[existindoIdProduto].quantidade += quantidade;
            setCarrinho(novoCarrinho);
        }
    }

    function removerDoCarrinho(produto) {
        Swal.fire({
            title: "Você tem certeza?",
            text: "O produto será removido do carrinho!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "var(--cor2)",
            cancelButtonColor: "var(--cor6)",
            confirmButtonText: "Sim, deletar!"
          }).then((result) => {
            if (result.isConfirmed) {
                const index = carrinho.findIndex(item => item.id === produto.id);
                if (index !== -1) {
                    const novoCarrinho = [...carrinho];
                    novoCarrinho.splice(index, 1);
                    setCarrinho(novoCarrinho);
                }

                Swal.fire({
                    title: "Item removido!",
                    text: "Produto foi removido do carrinho",
                    icon: "success"
                });
            }
          });
    }

    useEffect(() => {
        const novoTotalCarrinho = carrinho.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0);
        setTotalCarrinho(novoTotalCarrinho);
    }, [carrinho, setTotalCarrinho]);

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
