import carrinhoVazio from "../../../src/assets/images/carrinho-vazio.svg";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import remover from "../../../src/assets/images/lata-de-lixo.png"
import styled from './Carrinho.module.css';

const Carrinho = () => {
    const { carrinho, quantidade, handleChange, removerDoCarrinho } = useCarrinhoContext();

    return (
        <main className={styled.container_principal}>
            <section className={styled.container_view_carrinho}>
                {carrinho.length === 0
                    ? <section className={styled.container_carrinho}>
                        <div className={styled.container_carrinho_vazio}>
                            <img className={styled.imagem_carrinho_vazio} src={carrinhoVazio} alt="Ícone do carrinho vazio" />
                            <p className={styled.texto_carrinho_vazio}>Carrinho vazio</p>
                        </div>
                    </section>
                    : carrinho.map((produto) => {
                        return (
                            <section key={produto.id} className={styled.container_carrinho}>
                                <img src={produto.imagem} alt="" className={styled.produto_imagem_carrinho} />
                                <div className={styled.produto_informacoes}>
                                    <h3 className={styled.produto_nome_carrinho}>{produto.nome_produto} - {produto.marca}</h3>
                                    <p className={styled.produto_codigo_carrinho}>(Cód. {produto.codigo})</p>
                                </div>
                                <div className={styled.container_preco}>
                                    <input type="number" value={produto.quantidade} onChange={handleChange} min={0} max={999} className={styled.produto_quantidade} />
                                    <h3 className={styled.produto_valor_carrinho}>R$ {produto.preco}</h3>
                                </div>
                                <abbr title="Remover item do carrinho" className={styled.abreviacao}>
                                    <img src={remover} className={styled.btn_excluir_produto} alt="Ícone excluir item" onClick={() => removerDoCarrinho(produto)}></img>
                                </abbr>
                            </section>
                        )
                    })}
            </section>

            <aside className={styled.container_calculo}>
                <h3>Resumo da compra</h3>
                <div className={styled.calculo}>
                    <p>Descontos</p>
                    <h4 className={styled.valores}>R$ 0.00</h4>
                </div>
                <div className={styled.calculo}>
                    <p>Total</p>
                    <h4 className={styled.valores}>R$ 0.00</h4>
                </div>
                <button className={styled.btn_finalizar_compra}>Concluir Pedido</button>
                <p className={styled.aviso}>
                    Reiteramos que nossa venda é exclusiva para profissionais, estudantes ou empresas da área de odontologia
                    maiores de 18 anos, devidamente habilitados ao exercício da profissão ou comprovando vínculo na instituição de ensino.
                </p>
            </aside>
        </main>
    )
}

export default Carrinho;