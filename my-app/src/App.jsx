import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import mostrarMensagem from './components/Botao'

function App() {

  return (
     <div>
        <Titulo/>
        <Aluno/>
        <button onClick={mostrarMensagem}>
            Clique aqui para confirmar presença
        </button>
     </div>
  )
}

export default App
