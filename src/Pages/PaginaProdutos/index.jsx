import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import NaoEncontrada from "../../Pages/NaoEncontrada";
import materiais from "../../json/produtos.json";
import { useParams } from "react-router-dom";
import styled from "./Post.module.css";

const PaginaProdutos = () => {
    const { AdicionarAoCarrinho, opcaoSelecionada, identificadorChangeOpcaoSelecionada, quantidade, identificadorChangeQuantidade } = useCarrinhoContext();
 
    const parametros = useParams();
    const material = materiais.find((material) => {
        return material.id === Number(parametros.id);
    });

    if (!material) {
        return <NaoEncontrada />;
    }

    const valor_economizado = material.preco_anterior - material.preco;
    
    return (
        <main className={styled.container_material}>
            <figure className={styled.left_container}>
                <img className={styled.img_material} src={material.imagem} alt={material.alt} />
            </figure>

            <section className={styled.right_container}>
                <h1 className={styled.titulo_material}>
                    {material.nome_produto} - {material.marca}
                </h1>
                <h3 className={styled.descricao_material}>
                    <p>{material.descricao}</p>
                </h3>
                <p className={styled.codReferencia_material}>
                    Cod. de Referência: {material.codigo}
                </p>

                <div className={styled.opcoes}>
                    {material.opcoes && material.opcoes.length > 0 
                    ? (<>
                        <h3 className={styled.titulo_opcoes}>Escolha a cor<span className={styled.obrigatorio}>*</span></h3>
                            <select value={opcaoSelecionada} onChange={identificadorChangeOpcaoSelecionada} required>
                                <option key="Escolha uma cor" value="Escolha uma cor" selected>Escolha uma cor</option>
                                {material.opcoes.map((opcao) => (
                                    <option key={opcao} value={opcao}>{opcao}</option>
                                ))}
                            </select>
                       </>) 
                     : (<span></span>)}
                </div>

                <section className={styled.container_precoQuantidade_material}>
                    <div className={styled.containerPreco_material}>
                        <p className={styled.preco_anterior_material}>
                            R$ {material.preco_anterior.toFixed(2)}
                        </p>
                        <p className={styled.preco_material}>
                            R$ {material.preco.toFixed(2)}
                        </p>
                    </div>

                    <div className={styled.containerQuantidade_material}>
                        <input type="number" value={quantidade} min={1} onChange={identificadorChangeQuantidade} className={styled.quantidade_material} />
                        <button className={styled.btn_adicionarCarrinho} type="button"
                            onClick={() =>AdicionarAoCarrinho({
                                    id: material.id,
                                    nome_produto: material.nome_produto,
                                    marca: material.marca,
                                    preco: material.preco,
                                    codigo: material.codigo,
                                    imagem: material.imagem,
                                    opcoes: opcaoSelecionada,
                                    alt: material.alt,
                                }, Number(quantidade))}>
                            <span>Adicionar ao Carrinho</span>
                        </button>
                        <div className={styled.informacao_economia}>
                            <p>
                                Economize agora R$ {valor_economizado.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default PaginaProdutos;