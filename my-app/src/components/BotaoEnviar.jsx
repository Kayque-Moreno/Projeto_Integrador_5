function BotaoEnviar(){
    function Enviar(){
        alert("Cadastro enviado com sucesso!")
    }
    return(
        <div>
            <button onClick={Enviar}> Enviar </button>
        </div>
        
    )
}
export default BotaoEnviar