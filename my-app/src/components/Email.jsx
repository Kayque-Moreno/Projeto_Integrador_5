function Email(){
   const handleEmail = (event) => {
        console.log("Email: ", event.target.value)
   }
    return(
        <div>
            <p>Informe seu email:</p>
            <input type="text" onChange={handleEmail}/>
        </div>
    )
}
export default Email