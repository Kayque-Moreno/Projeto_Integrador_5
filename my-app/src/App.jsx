import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import mostrarMensagem from './components/Botao'
import capturarTexto from './components/Texto'

function App() {

  return (
     <div>
        <Titulo/>
        <Aluno/>
        <button onClick={mostrarMensagem}>
            Clique aqui para confirmar presença
        </button><br></br>
        <input type = "text" onChange={capturarTexto}/>
     </div>
  )
}

export default App
