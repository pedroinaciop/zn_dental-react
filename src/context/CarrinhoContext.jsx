import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(1);
    
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, quantidade, setQuantidade}}>
            {children}
        </CarrinhoContext.Provider>
    )
}