import iconCarrinho from "../../../src/assets/images/icons/icon-carrinho.png";
import iconCadastro from "../../assets/images/icons/icon-login.png";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import lupa from "../../assets/images/icons/procurar.png";
import logo from "../../assets/images/logo-zn.png";
import { NavLink } from 'react-router-dom';
import styled from './Header.module.css';
import { useContext } from "react";

const Header = () => {
    const { carrinho } = useContext(CarrinhoContext);

    return (
        <header>      
            <nav className={styled.navegacao}>
                <ul className={styled.navegacao_lista}>
                    <NavLink to={"/Resinas"} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#363889' : '#667381'})}>
                        <li className={styled.lista_tipo} ><p className={styled.lista_tipo_link}>Resinas</p></li>
                    </NavLink>
                    <NavLink to={"/Laboratório"} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#363889' : '#667381'})}>
                        <li className={styled.lista_tipo}><p className={styled.lista_tipo_link}>Laboratório</p></li>
                    </NavLink>
                    <NavLink to={"/Equipamentos"} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#363889' : '#667381'})}>
                        <li className={styled.lista_tipo}><p className={styled.lista_tipo_link}>Equipamentos</p></li>
                    </NavLink>
                    <NavLink to={"Descartáveis"} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#363889' : '#667381'})}>
                        <li className={styled.lista_tipo}><p className={styled.lista_tipo_link}>Descartáveis</p></li>
                    </NavLink>
                </ul>
            </nav>

            <section className={styled.cabecalho}>              
                <NavLink to={"/"}>
                    <img src={logo} alt="Logo da ZN Dental" className={styled.cabecalho_logo}/>
                </NavLink>

            <div className={styled.elementos_cabecalho}>
                    <img src={lupa} alt="Ícone de lupa" className={styled.img_pesquisa}/>
                    <input type="text" placeholder="Digite o que você procura" id="pesquisar" name="pesquisar" className={styled.input_pesquisa}/>
            </div>

            <div className={styled.cabecalho_direito}>
                <NavLink to={"/cadastro"}>
                <div className={styled.login}>
                        <img src={iconCadastro} alt="Ícone Login" className={styled.icon_login}/>
                        <div className={styled.elementos_cabecalho}>
                            <p>Olá,</p>
                            <p><strong>Faça seu conta</strong></p>
                        </div>
                    </div>
                </NavLink>
            </div>

            <div className={styled.carrinho}>
                <NavLink to={"/carrinho"} className={styled.link_carrinho}>
                    <img src={iconCarrinho} alt="Ícone Carrinho" className={styled.icon_carrinho}/>
                    <p className={styled.elementos_cabecalho}>
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