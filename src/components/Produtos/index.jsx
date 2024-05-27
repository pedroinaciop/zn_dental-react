import { CarrinhoContext } from "../../context/CarrinhoContext";
import materiais from "../../json/produtos.json";
import styled from "./Produtos.module.css";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";

const Produtos = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    function AdicionarAoCarrinho(item, quantidade) {
        const novoCarrinho = [...carrinho];
        const existindoIdProduto = novoCarrinho.findIndex(
            (i) => i.id === item.id,
        );

        if (existindoIdProduto === -1) {
            setCarrinho([...novoCarrinho, { ...item, quantidade }]);
        } else {
            novoCarrinho[existindoIdProduto].quantidade += quantidade;
            setCarrinho(novoCarrinho);
        }
    }

    return (
        <section className={styled.container}>
            {materiais.map((material) => {
                return (
                    <div key={material.id} className={styled.container__nicho}>
                        <div className={styled.nicho__imagem}>
                            <img
                                className={styled.nicho__imagem__img}
                                src={material.imagem}
                                alt={material.alt}
                            />
                        </div>
                        <div className={styled.nicho__informacoes}>
                            <p className={styled.nome_produto}>
                                <NavLink to={`produto/${material.id}`}>
                                    {material.nome_produto} - {material.marca}
                                </NavLink>
                            </p>
                            <p className={styled.descricao}>
                                {material.descricao}.
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
                        </div>
                        <button
                            type="button"
                            className={styled.comprar}
                            onClick={() =>
                                AdicionarAoCarrinho(
                                    {
                                        id: material.id,
                                        nome_produto: material.nome_produto,
                                        marca: material.marca,
                                        preco: material.preco,
                                        codigo: material.codigo,
                                        imagem: material.imagem,
                                        alt: material.alt,
                                    },
                                    1,
                                )
                            }
                        >
                            Adicionar
                        </button>
                    </div>
                );
            })}
        </section>
    );
};

export default Produtos;
