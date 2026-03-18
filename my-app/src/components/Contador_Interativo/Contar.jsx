import React, {useState} from 'react';

function Contar(){
    const[Contador, setContador] = useState(0);
    
    const incrementar = () => {
        setContador(Contador + 1);
    }

    const decrementar = () => {
        setContador(Contador - 1);
    }

    return(
        <div>
            <p>Contagem: {Contador}</p>
            <button onClick = {incrementar}>
                Incrementar
            </button>

            <button onClick = {decrementar}>
                Decrementar
            </button>
        </div>
    )
}
export default Contar