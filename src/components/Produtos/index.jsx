import { NavLink } from 'react-router-dom';
import materiais from "../../json/produtos.json";
import styled from "./Produtos.module.css";

const Produtos = () => {    

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
                        <button type="submit" className={styled.comprar}>
                            Adicionar
                        </button>
                    </div>
                );
            })}
        </section>
    );
};

export default Produtos;


   // const [carrinho, setCarrinho] = useState([]);

    //   const adicionarAoCarrinho = (item, quantidade) => {
    //     const novoCarrinho = [...carrinho];
    //     const existindoIdProduto = novoCarrinho.findIndex((i) => i.id === item.id);
    //     console.log(novoCarrinho);

    //     if (existindoIdProduto === -1) {
    //       setCarrinho([...novoCarrinho, { ...item, quantidade }]);
    //     } else {
    //       novoCarrinho[existindoIdProduto].quantidade += quantidade;
    //       setCarrinho(novoCarrinho);
    //     }
    //   };

    //     adicionarAoCarrinho({
    //         id: material.id,
    //         nome_produto: material.nome_produto,
    //         marca: material.marca,
    //         descricao: material.descricao,
    //         preco_anterior: material.preco_anterior,
    //         preco: material.preco,
    //         codigo: material.codigo,
    //         imagem: material.imagem,
    //         alt: material.alt,
    //         categoria: material.categoria}, 1)}>