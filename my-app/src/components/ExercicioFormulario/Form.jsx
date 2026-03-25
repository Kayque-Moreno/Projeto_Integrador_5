import {useState} from "react;

function Formulario(){
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
    }

    return(
        <div>
            <h2>FORMULARIO DE CADASTRO</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type = "text",
                        name = "nome",
                        value = {form.nome}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type = "text",
                        name = "email",
                        value = {form.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Cidade:</label>
                    <input
                        type = "text",
                        name = "cidade",
                        value = {form.cidade}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Perfil</label>
                    <select
                        name = "perfil",
                        value = {form.perfil}
                        onChange={handleChange}>
                        <option value = "">Selecione um perfil</option>
                        <option value = "administrador">Administrador</option>
                        <option value = "usuario">Usuario</option>
                    </select>
                </div>

                <div>
                    <label>Receber Novidades</label>
                    <input
                        type = "checkbox",
                        name = "receber_novidades",
                        value = {form.receber_novidades}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Observações</label>
                    <input
                        type = "textarea",
                        name = "observacoes",
                        value = {form.observacoes}
                        onChange={handleChange}
                    />
                </div>
                <button>CADASTRAR</button>
            </form>
        </div>
    );
}
export default Form;