import { useContext, useEffect } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import Swal from "sweetalert2";

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    const { menuAberto, setMenuAberto }  = useContext(CarrinhoContext);
    const { quantidade, setQuantidade } = useContext(CarrinhoContext);
    const { totalCarrinho, setTotalCarrinho } = useContext(CarrinhoContext);
    const { opcaoSelecionada, setOpcaoSelecionada } = useContext(CarrinhoContext);

    function AdicionarAoCarrinho(item, quantidade) {
        const novoCarrinho = [...carrinho];
        const existindoIdProduto = novoCarrinho.findIndex((i) => i.id === item.id);

        if (item.opcoes === 'Escolha uma cor') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, não esqueça de escolher a cor do seu produto!",
              });
              return 0;
        }

        if (existindoIdProduto === -1) {
            setCarrinho([...novoCarrinho, { ...item, quantidade }]);
        } else {
            novoCarrinho[existindoIdProduto].quantidade += quantidade;
            setCarrinho(novoCarrinho);
        }
        setQuantidade(1);
        setOpcaoSelecionada("Escolha uma cor");
        setMenuAberto(null);
    };

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
    };

    const atualizarQuantidadeProduto = (id, novaQuantidade) => {
        setCarrinho((carrinhoAtual) =>
            carrinhoAtual.map((produto) =>
            produto.id === id ? { ...produto, quantidade: novaQuantidade } : produto
            )
        );
    };

    const identificadorChangeQuantidade = (event) => {
        setQuantidade(event.target.value);
    };
    
    const identificadorChangeOpcaoSelecionada = (event) => {
        setOpcaoSelecionada(event.target.value);
    };

    const removerTodosOsProdutos = () => {
        Swal.fire({
            title: "Você tem certeza?",
            text: "Todos os produtos serão removidos",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "var(--cor2)",
            cancelButtonColor: "var(--cor6)",
            confirmButtonText: "Sim, deletar!"
          }).then((result) => {
            if (result.isConfirmed) {
                setCarrinho([]);
                Swal.fire({
                    title: "Itens removidos!",
                    text: "Todos os produtos foram removidos",
                    icon: "success"
                });
            }
          });
    };

    const abrirMenu = (id) => {
        setMenuAberto(menuAberto === id ? null : id);
        setQuantidade(1);
        setOpcaoSelecionada("Escolha uma cor");
    };

    useEffect(() => {
        const novoTotalCarrinho = carrinho.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0);
        setTotalCarrinho(novoTotalCarrinho);
    }, [carrinho, setTotalCarrinho, setCarrinho]);

    return {
        carrinho, 
        setCarrinho,
        totalCarrinho,
        
        quantidade,
        setQuantidade,
        
        opcaoSelecionada,
        setOpcaoSelecionada,
        menuAberto,
        
        abrirMenu,
        removerDoCarrinho,
        AdicionarAoCarrinho,
        removerTodosOsProdutos,
        atualizarQuantidadeProduto,
        identificadorChangeQuantidade,
        identificadorChangeOpcaoSelecionada
    };
};
