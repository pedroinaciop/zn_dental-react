import iconCarrinho from "../../../src/assets/images/icons/icon-carrinho.png";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import iconCadastro from "../../assets/images/icons/icon-login.png";
import logo from "../../assets/images/logo-zn.png";
import { NavLink } from 'react-router-dom';
import styled from './Header.module.css';
import { useContext } from "react";

const Header = () => {
    const { carrinho } = useContext(CarrinhoContext);

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
                <NavLink to={"/"}>
                    <img src={logo} alt="Logo da ZN Dental" className={styled.cabecalho__logo}/>
                </NavLink>

            <div className={styled.elementos__cabecalho}>
                <input type="search" placeholder="Digite o que você procura" className={styled.input__pesquisa} id="search" name="search"/>
            </div>

            <div className={styled.cabecalho__direito}>
                <NavLink to={"/cadastro"}>
                <div className={styled.login}>
                        <img src={iconCadastro} alt="Ícone Login" className={styled.icon__login}/>
                        <div className={styled.elementos__cabecalho}>
                            <p>Olá,</p>
                            <p><strong>Faça seu conta</strong></p>
                        </div>
                    </div>
                </NavLink>
            </div>

            <div className={styled.carrinho}>
                <NavLink to={"/carrinho"} className={styled.link__carrinho}>
                    <img src={iconCarrinho} alt="Ícone Carrinho" className={styled.icon__carrinho}/>
                    <p className={styled.elementos__cabecalho}>
                        Carrinho 
                    </p>
                    <p className={styled.quantidade_carrinho}>
                        {carrinho.length === 0 ? null : carrinho.length}
                    </p>
                </NavLink>
            </div>
        </section>
    </header>
    )
}

export default Header;