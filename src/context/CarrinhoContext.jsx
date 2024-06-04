import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(1);
    const [totalCarrinho, setTotalCarrinho] = useState(0);
    
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, quantidade, setQuantidade, totalCarrinho, setTotalCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}