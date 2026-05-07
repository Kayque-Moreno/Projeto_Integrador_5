import { useState } from "react";

function CadastroLivro() {

  const [form, setForm] = useState({
    livro: "",
    autor: "",
    categoria: "",
    disponivel_para_emprestimo: false,
    javascript : false,
    java : false,
    python : false,
    php : false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    console.log(checked)
    console.log(name)
    console.log(type)
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
      
    });
    
    console.log(form)

  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Livro: ", form.livro);
    console.log("Autor: ", form.autor);
    console.log("Categoria: ", form.categoria)

    alert("Empréstimo realizado com sucesso!")
    
  }

  function apagarDados(){
    setForm({
      livro: "",
      autor: "",
      categoria: "",
      disponivel_para_emprestimo: "",
      tecnologias_relacionada:{
        javascript : false,
        java : false,
        python : false,
        php : false
      }
    })
  }

  return (
    <div>
      <h2>Cadastro de Livro</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Livro: </label>
          <input
            type="text"
            name="livro"
            value={form.livro}
            onChange={handleChange}
           
          />
        </div>

        <div>
          <label>Autor: </label>
          <input
            type="text"
            name="autor"
            value={form.autor}
            onChange={handleChange}
            
          />
        </div>
        
        <div>
          <label>Categoria do Livro: </label>
          <select
              name = "categoria"
              value = {form.categoria}
              onChange={handleChange}>
              <option value = "Frontend">Frontend</option>
              <option value = "Backend">Backend</option>
              <option value = "Banco de Dados">Banco de Dados</option>
              <option value = "Mobile">Mobile</option>
          </select>
        </div>

        <div>
          <label>Livro disponível para empréstimo: </label>
          <input 
            type = "checkbox"
            name = "disponivel_para_emprestimo"
            value = {form.disponivel_para_emprestimo}
            onChange={handleChange}  
          />
        </div>

        <div>
          <label>Tecnologias relacionadas ao livro: </label>
          <input 
            type="checkbox" 
            name = "javascript"
            value = {form.javascript}
            onChange={handleChange}
            /> JavaScript

            <input 
            name = "java"
            type="checkbox" 
            value = {form.java}
            onChange={handleChange}
            /> Java

            <input 
            name = "python"
            type="checkbox" 
            value = {form.python}
            onChange={handleChange}
            /> Python

            <input 
            name = "php"
            type="checkbox" 
            value = {form.php}
            onChange={handleChange}
            /> PHP
        </div>

        <button type="submit" onClick={apagarDados}>Cadastrar</button>
      </form>
    </div>
  );
}
export default CadastroLivro