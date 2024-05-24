import styled from "./Cadastro.module.css";

const Cadastro = () => {
    return (
        <form action="" className={styled.formulario}>
            <h1 className={styled.titulo_formulario}>Cadastre-se</h1>

                <div className={styled.container__dados}>
                    <div className={styled.dados}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" size="40" maxLength="40" required/>
                    </div>
                    <div className={styled.dados}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" size="40" maxLength="40" required/>
                    </div>
                </div>

                <div className={styled.container__dados}>
                    <div className={styled.dados}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" size="40" maxLength="40" required/>
                    </div>
                    <div className={styled.dados}>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input type="text" id="sobrenome" size="40" maxLength="40" required/>
                    </div>
                </div>

                <div className={styled.container__dados}>
                    <div className={styled.dados}>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" placeholder="___.___.___-__" size="40" /*onInput="mascara(this, 'cpf')"*//>
                    </div>
                    <div className={styled.dados}>
                        <label htmlFor="nascimento">Data de Nascimento</label>
                        <input type="date" id="nascimento" required/>
                    </div>
                    <div className={styled.dados}>
                        <label htmlFor="sexo">Sexo</label>
                        <select id="sexo" required>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Não especificado">Não especificado</option>
                        </select>
                    </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label htmlFor="celular">Celular</label>
                            <input type="text" id="celular" placeholder="(__)_____-____" size="40" /*onInput="mascara(this, 'tel')"*//>
                        </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" placeholder="_____-___" size="60" /*onInput="mascara(this, 'cep')"*//>
                        </div>
                        <div className={styled.dados}>
                            <label htmlFor="uf">UF</label>
                            <input type="text" id="uf" size="20" readOnly/> 
                        </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label htmlFor="logradouro">Endereço</label>
                            <input type="text" id="logradouro" size="40" readOnly/>
                        </div>
                        <div className={styled.dados}>
                            <label htmlFor="complemento">Complemento</label>
                            <input type="text" id="complemento" size="40" maxLength="30" required/>
                        </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" id="bairro" size="40" readOnly/>
                        </div>
                        <div className={styled.dados}>
                            <label htmlFor="localidade">Estado</label>
                            <input type="text" id="localidade" size="40" readOnly/>
                        </div>      
                    </div>
                <button type="submit" className={styled.cadastrar}>CADASTRAR</button>
            </form>  
    )
}

export default Cadastro;