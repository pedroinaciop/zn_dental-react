import NaoEncontrada from "../../Pages/NaoEncontrada"
import materiais from "../../json/produtos.json";
import { useParams } from "react-router-dom";
import styled from "./Post.module.css";

const Post = () => {
    const parametros = useParams();
    
    const material = materiais.find((material) => {
        return material.id === Number(parametros.id);
    })

    if(!material) {
        return <NaoEncontrada />
    }

    return (
        <main className={styled.container_material}>
            <figure className={styled.left_container}>
                <img className={styled.img_material} src={material.imagem} alt={material.alt}/>
            </figure>

            <section className={styled.right_container}>
                <h1 className={styled.titulo_material}>{material.nome_produto} - {material.marca}</h1>
                <h3 className={styled.descricao_material}>{material.quantidade_embalagem}</h3>
                <p className={styled.codReferencia_material}>Cod. de Referência: {material.codigo}</p>

                <section className={styled.container_precoQuantidade_material}>
                    <div className={styled.containerPreco_material}>
                        <p className={styled.preco_anterior_material}>R$ {material.preco_anterior.toFixed(2)}</p>
                        <p className={styled.preco_material}>R$ {material.preco.toFixed(2)}</p>
                    </div>

                    <div className={styled.containerQuantidade_material}>
                        <input className={styled.quantidade_material} type="number" id=""/>
                        <button className={styled.btn_adicionarCarrinho} type="button">
                            <span>Adicionar ao Carrinho</span>
                        </button>
                    </div>
                </section>
            </section>
            
        </main>
        
    )
}

export default Post;