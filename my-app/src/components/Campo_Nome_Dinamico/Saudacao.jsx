import React, {useState} from "react"
function Nome(){
    const [nome, setNome] = useState('')
    const handleChange = (event) => {
        setNome(event.target.value)
    }
    return(
        <div>
            <h2>Digite o seu nome:</h2>
            <input type="text" value={nome} onChange={handleChange}/>
            <p>Olá, {nome}</p>
        </div>
    )
}
export default Nome