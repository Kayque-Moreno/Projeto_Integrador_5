import {useState} from "react"

function FormularioCadastro(){
    const[form,setForm] = useState({
        nome : "",
        email : "",
        cidade : "",
        perfil : "",
        receber_novidades : "",
        observacoes : ""
    });

    function handleChange(event){
        const{name, type, value, checked} = event.target;

        setForm({
            ...form,
            [name] : type === 'checkbox' ? checked : value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        console.log("Nome: ", form.nome);
        console.log("Email: ", form.email);
        console.log("Cidade: ", form.cidade);
        console.log("Perfil: ", form.perfil);
        console.log("Receber Novidades: ", form.receber_novidades);
        console.log("Observações: ", form.observacoes);
        alert('Cadastro realizado com sucesso!');
    }

    return(
        <div>
            <h2>FORMULARIO DE CADASTRO</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome: </label><br></br>
                    <input
                        type = "text"
                        name = "nome"
                        value = {form.nome}
                        onChange={handleChange}
                    />
                </div>
                <br></br>
                <div>
                    <label>Email: </label><br></br>
                    <input
                        type = "text"
                        name = "email"
                        value = {form.email}
                        onChange={handleChange}
                    />
                </div>
                <br></br>
                <div>
                    <label>Cidade: </label><br></br>
                    <input
                        type = "text"
                        name = "cidade"
                        value = {form.cidade}
                        onChange={handleChange}
                    />
                </div>
                <br></br>
                <div>
                    <label>Perfil </label><br></br>
                    <select
                        name = "perfil"
                        value = {form.perfil}
                        onChange={handleChange}>
                        <option value = "">Selecione um perfil</option>
                        <option value = "administrador">Administrador</option>
                        <option value = "usuario">Usuario</option>
                    </select>
                </div>
                <br></br>
                <div>
                    <label>Receber Novidades </label>
                    <input
                        type = "checkbox"
                        name = "receber_novidades"
                        value = {form.receber_novidades}
                        onChange={handleChange}
                    />
                </div>
                <br></br>
                <div>
                    <label>Observações:</label><br></br>
                    <textarea
                        name = "observacoes"
                        value = {form.observacoes}
                        onChange={handleChange}
                    />
                </div>
                <br></br>
                <button>CADASTRAR</button>
            </form>
        </div>
    );
}
export default FormularioCadastro;