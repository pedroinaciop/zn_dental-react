import { NavLink } from 'react-router-dom';
import styled from './Header.module.css';

const Header = () => {
    return (
        <header>      
            <nav className={styled.navegacao}>
                <ul className={styled.navegacao__lista}>
                    <li className={styled.lista_tipo}><p className={styled.lista_tipo_link}>Dentistas</p></li>
                    <li className={styled.lista_tipo}><p className={styled.lista_tipo_link}>Estudantes</p></li>
                    <li className={styled.lista_tipo}><p className={styled.lista_tipo_link}>Laboratório</p></li>
                    <li className={styled.lista_tipo}><p className={styled.lista_tipo_link}>Equipamentos</p></li>
                </ul>
            </nav>

            <section className={styled.cabecalho}>  
                <img className={styled.menu_hamburguer} src="assets/images/burger-bar.png" alt="Menu de opções"/>
             
                <NavLink to={"/"}>
                    <img src="assets/images/logo-zn.png" alt="Logo da ZN Dental" className={styled.cabecalho__logo}/>
                </NavLink>

            <div className={styled.elementos__cabecalho}>
                <input type="search" placeholder="Digite o que você procura" className={styled.input__pesquisa}/>
            </div>

            <div className={styled.cabecalho__direito}>
                <NavLink to={"/cadastro"}>
                <div className={styled.login}>
                        <img src="assets/images/icons/icon-login.png" alt="Ícone Login" className={styled.icon__login}/>
                        <div className={styled.elementos__cabecalho}>
                            <p>Olá,</p>
                            <p><strong>Faça seu conta</strong></p>
                        </div>
                    </div>
                </NavLink>
            </div>

            <div className={styled.carrinho}>
                <NavLink to={"/carrinho"} className={styled.link__carrinho}>
                    <span className={styled.notificacao_carrinho}></span>

                    <img src="assets/images/icons/icon-carrinho.png" alt="Ícone Carrinho" className={styled.icon__carrinho}/>
                    <p className={styled.elementos__cabecalho}>Carrinho</p>
                </NavLink>
            </div>
        </section>
    </header>
    )
}

export default Header;