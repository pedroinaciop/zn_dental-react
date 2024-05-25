import styled from './Carrinho.module.css';

const Carrinho = () => {
    return (
        <main className={styled.container_principal}>
            
            <section className={styled.container_view_carrinho}>
                <section className={styled.container_carrinho} /*className={styled.container_carrinho_vazio}*/>
                    <img className={styled.imagem_carrinho_vazio} src="/assets/images/carrinho-vazio.svg" alt="Ícone do carrinho vazio"/>
                    <p className={styled.texto_carrinho_vazio}>Carrinho vazio</p>
                </section>
            </section>
            
            <aside className={styled.container_calculo}>
                <h3>Resumo da compra</h3>
                <div className={styled.calculo}>
                    <p>Descontos</p>
                    <h4 className={styled.valores}>R$0.00</h4>
                </div>
                <div className={styled.calculo}>
                    <p>Total</p>
                    <h4 className={styled.valores} /*className={styled.valor_total}*/>R$0.00</h4>
                </div>
                <button className={styled.btn_finalizar_compra}>Concluir Pedido</button>
                <p className={styled.aviso}>
                Reiteramos que nossa venda é exclusiva para profissionais, estudantes ou empresas da área de odontologia                                   maiores de 18 anos, devidamente habilitados ao exercício da profissão ou comprovando vínculo na instituição de ensino.</p>
            </aside>
            
        </main>
    )
}

export default Carrinho;