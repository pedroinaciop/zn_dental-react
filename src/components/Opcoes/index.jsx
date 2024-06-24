import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import styled from "./Opcoes.module.css";


const Opcoes = () => {
    const { opcaoSelecionada, quantidade, identificadorChangeQuantidade, identificadorChangeOpcaoSelecionada} = useCarrinhoContext();

    return (
        <section className={styled.opcoesProduto}>
            <div>
                <h3>Para adicionar ao carrinho:</h3>
                <p>Escolha uma opção: </p>
                <select value={opcaoSelecionada} onChange={identificadorChangeOpcaoSelecionada} required>
                    <option key="Escolha uma opção" value="Escolha uma opção" selected>Escolha uma opção</option>
                </select>
            </div>
            <div className={styled.quantidadeEBotao}>
                <input type="number" value={quantidade} min={1} onChange={identificadorChangeQuantidade} />
                <button type="button" className={styled.comprar}>
                    Adicionar
                </button>
            </div>
        </section>
    )
}

export default Opcoes;