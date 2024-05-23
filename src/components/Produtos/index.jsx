import materiais from '../../json/produtos.json';
import styled from './Produtos.module.css';

const Produtos = () => {
    return (
        <section className={styled.container}>
            {materiais.map((material) => {
                return (
                    <div key={material.id} className={styled.container__nicho}>
                        <div className={styled.nicho__imagem}>
                            <img className={styled.nicho__imagem__img} src={material.imagem} alt={material.alt}/>
                        </div>
                        <div className={styled.nicho__informacoes}>
                            <p className={styled.nome_produto}>{material.nome_produto}{material.marca}</p>
                            <p className={styled.descricao}>{material.descricao}.</p>
                            <div className={styled.container_precos_anteriores}>
                                <p>R$</p>
                                <p className={styled.preco_anterior}>{material.preco_anterior.toFixed(2)}</p>
                            </div>
                            <div className={styled.container_precos_atuais}>
                                <p>R$</p>
                                <p className={styled.preco_atual}>{material.preco.toFixed(2)}</p>
                            </div>
                            <p className={styled.codigo_produto}>(Cód. ${material.codigo})</p>
                        </div>
                        <button type="submit" className="comprar">Adicionar</button>
                    </div>
                )
            })}
        </section>
    )
}

export default Produtos;