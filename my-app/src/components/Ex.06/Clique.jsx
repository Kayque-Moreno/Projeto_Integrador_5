import React, {useState} from 'react';

function Clique(){
    //inicializa o contador em 0.
    const[contador, setContador] = useState(0)

    //Função p/ aumnetar valor
    const aumentar = () => {
        setContador(contador + 1)
    }

     //Função p/ diminuir valor
    const diminuir = () =>{
        setContador(contador -1)
    }

    return(
        <div>
            <p>Contagem de Cliques: {contador}</p>

            <button onClick={aumentar}>
                Clique para Aumentar
            </button>

            <button onClick={diminuir}>
                Clique para diminuir
            </button>
        </div>
    )
}
export default Clique