import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [ carrinho, setCarrinho ] = useState([]);
    const [ quantidade, setQuantidade ] = useState(1);
    const [ menuAberto, setMenuAberto ]  = useState(null);
    const [ totalCarrinho, setTotalCarrinho ] = useState(0);
    const [ opcaoSelecionada, setOpcaoSelecionada ] = useState("Escolha uma cor");
    
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, quantidade, setQuantidade, totalCarrinho, setTotalCarrinho, opcaoSelecionada, setOpcaoSelecionada, menuAberto, setMenuAberto}}>
            {children}
        </CarrinhoContext.Provider>
    )
}