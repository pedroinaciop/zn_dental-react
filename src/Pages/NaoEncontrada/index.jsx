import styles from './NaoEncontrada.module.css';
import erro from '../../assets/images/404.svg';

const NaoEncontrada = () => {
     return (
        <div className={styles.container_erro}>
            <img className={styles.img404} src={erro} alt="Imagem 'Erro - Página não encontrada'" />
            <h2>Página não encontrada</h2>
            <p>Oops! A página que procura não existe.</p>
        </div>
    );
}

export default NaoEncontrada;