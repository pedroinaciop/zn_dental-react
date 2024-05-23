import styled from "./Cadastro.module.css";

const Cadastro = () => {
    return (
        <form action="" className={styled.formulario}>
            <h1 className={styled.titulo_formulario}>Cadastre-se</h1>

                <div className={styled.container__dados}>
                    <div className={styled.dados}>
                        <label for="email">E-mail</label>
                        <input type="email" id="email" size="40" maxlength="40" required/>
                    </div>
                    <div className={styled.dados}>
                        <label for="senha">Senha</label>
                        <input type="password" id="senha" size="40" maxlength="40" required/>
                    </div>
                </div>

                <div className={styled.container__dados}>
                    <div className={styled.dados}>
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" size="40" maxlength="40" required/>
                    </div>
                    <div className={styled.dados}>
                        <label for="sobrenome">Sobrenome</label>
                        <input type="text" id="sobrenome" size="40" maxlength="40" required/>
                    </div>
                </div>

                <div className={styled.container__dados}>
                    <div className={styled.dados}>
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" placeholder="___.___.___-__" size="40" oninput="mascara(this, 'cpf')"/>
                    </div>
                    <div className={styled.dados}>
                        <label for="nascimento">Data de Nascimento</label>
                        <input type="date" id="nascimento" required/>
                    </div>
                    <div className={styled.dados}>
                        <label for="sexo">Sexo</label>
                        <select id="sexo" required>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Não especificado">Não especificado</option>
                        </select>
                    </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label for="celular">Celular</label>
                            <input type="text" id="celular" placeholder="(__)_____-____" size="40" oninput="mascara(this, 'tel')"/>
                        </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label for="cep">CEP</label>
                            <input type="text" id="cep" placeholder="_____-___" size="60" oninput="mascara(this, 'cep')"/>
                        </div>
                        <div className={styled.dados}>
                            <label for="uf">UF</label>
                            <input type="text" id="uf" size="20" readonly/> 
                        </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label for="logradouro">Endereço</label>
                            <input type="text" id="logradouro" size="40" readonly/>
                        </div>
                        <div className={styled.dados}>
                            <label for="complemento">Complemento</label>
                            <input type="text" id="complemento" size="40" maxlength="30" required/>
                        </div>
                    </div>

                    <div className={styled.container__dados}>
                        <div className={styled.dados}>
                            <label for="bairro">Bairro</label>
                            <input type="text" id="bairro" size="40" readonly/>
                        </div>
                        <div className={styled.dados}>
                            <label for="localidade">Estado</label>
                            <input type="text" id="localidade" size="40" readonly/>
                        </div>      
                    </div>
                <button type="submit" className={styled.cadastrar}>CADASTRAR</button>
            </form>  
    )
}

export default Cadastro;