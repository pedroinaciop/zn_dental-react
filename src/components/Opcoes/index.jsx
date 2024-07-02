import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import styled from "./Opcoes.module.css";

const Opcoes = ({ material }) => {
    const { opcaoSelecionada, quantidade, identificadorChangeQuantidade, identificadorChangeOpcaoSelecionada, AdicionarAoCarrinho} = useCarrinhoContext();

    return (
        <section className={styled.opcoes_produto}>
            <div className={styled.cabecalho_opcoes}>
                <div>
                    <h3>Para adicionar ao carrinho:</h3>
                    <p>Escolha uma opção: </p>
                </div>
                <select value={opcaoSelecionada} onChange={identificadorChangeOpcaoSelecionada} required>
                    <option key="Escolha uma opção" value="Escolha uma opção">Escolha uma opção</option>
                    {material.opcoes.map((opcao) => (
                        <option key={opcao} value={opcao}>{opcao}</option>
                    ))}
                </select>
            </div>
            <div className={styled.quantidade_botao}>
                <input type="number" value={quantidade} min={1} onChange={identificadorChangeQuantidade} />
                <button type="button" className={styled.comprar} onClick={() => AdicionarAoCarrinho({
                                id: material.id,
                                nome_produto: material.nome_produto,
                                marca: material.marca,
                                preco: material.preco,
                                codigo: material.codigo,
                                imagem: material.imagem,
                                opcoes: opcaoSelecionada,
                                alt: material.alt,
                            }, Number(quantidade))}>
                    Adicionar
                </button>
            </div>
        </section>
    )
}

export default Opcoes;