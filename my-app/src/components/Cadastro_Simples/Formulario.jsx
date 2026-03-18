import React, {useState} from "react"
function Formulario(){
    const[dados, setDados] = useState({
        nome:"",
        email:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setDados((prevDados) => ({
            ...prevDados, [name]: value
        }))

        return(
            <div>
                <h1>Formulário</h1>
                <h2>Insira seus dados:</h2>
                <input 
                    type="text" 
                    name="nome" 
                    value={dados.nome} 
                    onChange={handleChange}
                    placeholder="NOME"
                />

                <input 
                    type="text" 
                    name="email" 
                    value={dados.email} 
                    onChange={handleChange}
                    placeholder="EMAIL"
                />

                <p>Nome: {dados.nome}</p>
                <p>Email{dados.email}</p>
            </div>
        )
    }
}
export default Formulario