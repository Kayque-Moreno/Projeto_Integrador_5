function CampoNome(){

    const handleChange = (event) =>{
        console.log(event.target.value);
    };

    return(
        <div>
            <p>Digite seu nome:</p>
            <input type="text" onChange={handleChange}/>
        </div>
    )
}
export default CampoNome