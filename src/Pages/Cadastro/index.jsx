import styled from "./Cadastro.module.css";
import InputPersonalizado from "../../components/InputPersonalizado";

const Cadastro = () => {
    
    async function buscaCEP(cep) {
        try {
            const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const consultaCepConvertido = await consultaCEP.json();
    
            document.querySelector('#logradouro').value = consultaCepConvertido.logradouro;
            document.querySelector('#uf').value = consultaCepConvertido.uf;
            document.querySelector('#localidade').value = consultaCepConvertido.localidade;
            document.querySelector('#bairro').value = consultaCepConvertido.bairro;
        } catch(e) {
            console.log(e.message)
        }
    }
    
    return (
        <form action="" className={styled.formulario}>
            <h1 className={styled.titulo_formulario}>Cadastre-se</h1>

            <div className={styled.container__dados}>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="E-mail"
                        type="email"
                        id="email"
                        size="40"
                        maxLength="40"
                        placeholder="Insira seu e-mail"
                        required={true}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Senha"
                        type="password"
                        id="senha"
                        size="40"
                        maxLength="40"
                        required={true}
                    />
                </div>
            </div>

            <div className={styled.container__dados}>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Nome"
                        type="text"
                        id="nome"
                        size="40"
                        maxLength="40"
                        placeholder="Insira seu nome"
                        required={true}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Sobrenome"
                        type="text"
                        id="sobrenome"
                        size="40"
                        maxLength="40"
                        placeholder="Insira seu sobrenome"
                        required={true}
                    />
                </div>
            </div>

            <div className={styled.container__dados}>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="CPF"
                        type="text"
                        id="cpf"
                        size="40"
                        maxLength="14"
                        placeholder="___.___.___-__"
                        required={true}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Data de Nascimento"
                        type="date"
                        id="data"
                        required={true}
                    />
                </div>
                <div className={styled.dados}>
                    <label htmlFor="sexo">Sexo</label>
                    <select id="sexo" required>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Não especificado">
                            Não especificado
                        </option>
                    </select>
                </div>
            </div>

            <div className={styled.container__dados}>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Telefone"
                        type="text"
                        id="celular"
                        size="40"
                        maxLength="9"
                        placeholder="____-____"
                        required={true}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="WhatsApp"
                        type="text"
                        id="whatsapp"
                        size="40"
                        maxLength="14"
                        placeholder="(__)_____-____"
                        required={true}
                    />
                </div>
            </div>

            <div className={styled.container__dados}>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="CEP"
                        type="text"
                        id="cep"
                        size="5"
                        maxLength="40"
                        placeholder="_____-___"
                        required={true}

                        onBlur={(e) => buscaCEP(e.target.value)}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Endereço"
                        type="text"
                        id="logradouro"
                        size="45"
                        maxLength="40"
                        required={true}
                        readOnly={true}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Número"
                        type="text"
                        id="numero"
                        size="20"
                        maxLength="20"
                        required={true}
                    />
                </div>
            </div>
            <div className={styled.container__dados}>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="UF"
                        type="text"
                        id="uf"
                        size="5"
                        maxLength="40"
                        required={true}
                        readOnly={true}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Estado"
                        type="text"
                        id="localidade"
                        size="45"
                        maxLength="40"
                        required={true}
                        readOnly={true}
                    />
                </div>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Bairro"
                        type="text"
                        id="bairro"
                        size="20"
                        maxLength="40"
                        required={true}
                        readOnly={true}
                    />
                </div>
            </div>

            <div className={styled.container__dados}>
                <div className={styled.dados}>
                    <InputPersonalizado
                        titulo="Complemento"
                        type="text"
                        id="complemento"
                        size="97"
                        maxLength="30"
                        required={true}
                    />
                </div>
            </div>
            <button type="submit" className={styled.cadastrar}>
                CADASTRAR
            </button>
        </form>
    );
};

export default Cadastro;