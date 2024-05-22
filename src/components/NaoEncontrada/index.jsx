import styles from './NaoEncontrada.module.css';

const NaoEncontrada = () => {
    return (
        <div className={styles.container_erro}>
            <img className={styles.img404} src="/assets/images/404.svg" alt="Imagem 'Erro - Página não encontrada'" />
            <h2>Página não encontrada</h2>
            <p>Oops! A página que procura não existe.</p>
        </div>
    );
}

export default NaoEncontrada;