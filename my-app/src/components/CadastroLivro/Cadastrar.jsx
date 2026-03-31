import {useState} from "react"

function CadastroLivro(){
    const[formulario,setForm] = useState({
        titulo : "",
        autor : "",
        categoria : "frontend",
        disponivel_para_emprestimo : "",
        tecnologias_relacionadas : [],
        //criação das variáveis para armazenar os dados
    })

const [erro, setErro] = useState("")

function handleChange(event){
    const{name, type, value, checked} = event.target;

    setForm({
        ...formulario,
        tecnologias_relacionadas : lista
    })

    setForm({
        ...formulario,
        [name] : type === 'checkbox' ? checked : value
        //verificação para armazenar os dados inseridos
    })
}

function handleSubmit(event){
    event.preventDefault();//impede o recarregamento da página ao enviar os dados

        if(!formulario.titulo || !formulario.autor || !formulario.categoria){
            setErro("Preencha os campos obrigatórios!");
            return;
        }

        setErro("");

    console.log("Título: ", formulario.titulo);
    console.log("Autor: ", formulario.autor);
    console.log("Categoria: ", formulario.categoria);
    console.log("Disponível para empréstimo: ", formulario.disponivel_para_emprestimo);
    console.log("Tecnologias relacionadas ao livro:  ", formulario.tecnologias_relacionadas);
    alert("Empréstimo realizado com sucesso!!!", formulario);
}

return(
    <div>
        <h2>EMPRÉSTIMO DE LIVRO</h2>
        <h3>Preencha este formulário para realizar o empréstimo do livro desejado.</h3>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Título do livro: </label> <br></br>
                <input 
                    type = "text"
                    name = "titulo"
                    value = {formulario.titulo}
                    onChange = {handleChange}
                    />
            </div>

            <div>
                <label>Autor: </label><br />
                <input 
                    type = "text"
                    name = "autor"
                    value = {formulario.autor}
                    onChange = {handleChange}
                />
            </div>

            <div>
                <label>Categoria do Livro</label> <br />
                <select
                    name = "categoria"
                    value = {formulario.categoria}
                    onChange = {handleChange}>
                    
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="bd">Banco de Dados</option>
                    <option value="mobile">Mobile</option>
                </select>
            </div>

            <div>
                <label>Disponível para Empréstimo</label>
                <input
                type = "checkbox" 
                value = {formulario.disponivel_para_emprestimo}
                name = "disponivel_para_emprestimo"
                onChange = {handleChange}
                />
            </div>

            <div>
                <label>Tecnologias relacionadas</label><br/>
                <label>
                    <input
                        type = "checkbox"
                        name = "tecnologias_relacionadas"
                        value = "JavaScript"
                        checked = {formulario.tecnologias_relacionadas.includes("JavaScript")}
                        onChange = {handleChange}
                    /> 
                    JavaScript
                </label>  <br/>

                <label>
                    <input
                        type = "checkbox"
                        name = "tecnologias_relacionadas"
                        value = "Java"
                        checked = {formulario.tecnologias_relacionadas.includes("Java")}
                        onChange = {handleChange}
                    /> 
                    Java
                </label>  <br/>

                <label>
                    <input
                        type = "checkbox"
                        name = "tecnologias_relacionadas"
                        value = "Python"
                        checked = {formulario.tecnologias_relacionadas.includes("Python")}
                        onChange = {handleChange}
                    /> 
                    Python
                </label>  <br/> 

                <label>
                    <input
                        type = "checkbox"
                        name = "tecnologias_relacionadas"
                        value = "PHP"
                        checked = {formulario.tecnologias_relacionadas.includes("PHP")}
                        onChange = {handleChange}
                    /> 
                    PHP
                </label>   
            </div> 
            <br/>

            <button>SOLICITAR EMPRÉSTIMO</button>    
        </form>
    </div>
)
}
export default CadastroLivro