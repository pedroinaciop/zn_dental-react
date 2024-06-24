import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import { NavLink } from "react-router-dom";
import styled from "./Produtos.module.css";

const Produtos = ({ array }) => {
    const { AdicionarAoCarrinho, opcaoSelecionada, identificadorChangeOpcaoSelecionada, quantidade, identificadorChangeQuantidade } = useCarrinhoContext();
    
    return (
        <section className={styled.container}>
            {array.map((material) => {
                return (
                    <section key={material.id} className={styled.container__nicho}>
                        <figure className={styled.nicho__imagem}>
                            <img className={styled.nicho__imagem__img} src={material.imagem} alt={material.alt} />                                
                        </figure>
                        <section className={styled.nicho__informacoes}>
                            <p className={styled.nome_produto}>
                                <NavLink className={styled.link_produto} to={`/produto/${material.id}`}>
                                    {material.nome_produto} - {material.marca}
                                </NavLink>
                            </p>
                            <p className={styled.descricao}>
                                {material.descricao}
                            </p>
                            <div className={styled.container_precos_anteriores}>
                                <p>R$</p>   
                                <p className={styled.preco_anterior}>
                                    {material.preco_anterior.toFixed(2)}
                                </p>
                            </div>
                            <div className={styled.container_precos_atuais}>
                                <p>R$</p>
                                <p className={styled.preco_atual}>
                                    {material.preco.toFixed(2)}
                                </p>
                            </div>
                            <p className={styled.codigo_produto}>
                                (Cód. ${material.codigo})
                            </p>
                        </section>
                        {!material.opcoes 
                        ? <button type="button" className={styled.comprar} onClick={() => AdicionarAoCarrinho({
                                                                                    id: material.id,
                                                                                    nome_produto: material.nome_produto,
                                                                                    marca: material.marca,
                                                                                    preco: material.preco,
                                                                                    codigo: material.codigo,
                                                                                    imagem: material.imagem,
                                                                                    opcoes: "",
                                                                                    alt: material.alt,
                                                                                }, 1)}>
                            Adicionar
                          </button> 
                        : <button type="button" className={styled.comprar}>
                            Opções
                          </button>}
                          {<section className={styled.opcoesProduto}>
                                <div>
                                    <h3>Para adicionar ao carrinho:</h3>
                                    <p>Escolha uma opção: </p>
                                    <select value={opcaoSelecionada} onChange={identificadorChangeOpcaoSelecionada} required>
                                        <option key="Escolha uma opção" value="Escolha uma opção" selected>Escolha uma opção</option>                                  
                                    </select>    
                                </div>                                                
                                <div className={styled.quantidadeEBotao}>
                                    <input type="number" value={quantidade} min={1} onChange={identificadorChangeQuantidade}/>
                                    <button type="button" className={styled.comprar} onClick={() => AdicionarAoCarrinho({
                                        id: material.id,
                                        nome_produto: material.nome_produto,
                                        marca: material.marca,
                                        preco: material.preco,
                                        codigo: material.codigo,
                                        imagem: material.imagem,
                                        opcoes: "",
                                        alt: material.alt,
                                    }, Number(quantidade))}>
                                    Adicionar
                                    </button>                     
                                </div>   
                          </section>}
                    </section>
                );
            })}
        </section>
    );
};

export default Produtos;
