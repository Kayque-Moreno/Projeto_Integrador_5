function Nome(){

   const handleNome = (event) => {
        console.log("Nome: ", event.target.value)
   }
    return(
        <div>
            <p>Informe seu nome:</p>
            <input type="text" onChange={handleNome}/>
        </div>
    )
}
export default Nome