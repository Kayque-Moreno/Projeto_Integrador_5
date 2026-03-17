import './App.css'
import Clique from './components/Ex.06/Clique'
import ContadorCliques from './components/Ex.06/ContadorCliques'
{/*import Titulo2 from './components/Titulo2'
import Titulo1 from './components/Titulo1'
import Mensagem from './components/Mensagem'
import Bottom from './components/Bottom'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import mostrarMensagem from './components/Botao'
import capturarTexto from './components/Texto'
import CampoNome from './components/CampoNome'
import MensagemUsuario from './components/MensagemUsuario'
import Titulo3 from './components/Titulo3'
import BotaoEnviar from './components/BotaoEnviar'
import Nome from './components/Nome'
import Email from './components/Email'
import ContadorCliques from './components/Ex.06/ContadorCliques'*/}

function App() {

  return (
     <div>
         <ContadorCliques/>
         <Clique/>
        {/* <Titulo3/>
         <Nome/>
         <Email/>
         <BotaoEnviar/>
         <Titulo2/>
         <CampoNome/>
         <MensagemUsuario/>
         <Titulo1/>
         <Mensagem/>
         <button onClick={Bottom}>
            Clique nesse botão
         </button>
         <Titulo/>
         <Aluno/>
         <button onClick={mostrarMensagem}>
            Clique aqui para confirmar presença
         </button><br></br>
         <input type = "text" onChange={capturarTexto}/>*/}
     </div>
  )
}

export default App
