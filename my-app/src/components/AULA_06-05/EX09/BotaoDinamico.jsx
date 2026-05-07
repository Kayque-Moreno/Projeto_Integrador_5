import './BotaoDinamico.css';
function BotaoDinamico() {
  const tipoSucesso = "sucesso";
  const tipoErro = "erro";
  const tipoAviso = "aviso";

  return (
    <div>
      <button className={`botao ${tipoSucesso}`}>Sucesso</button>
      <button className={`botao ${tipoErro}`}>Erro</button>
      <button className={`botao ${tipoAviso}`}>Aviso</button>
    </div>
  );
}

export default BotaoDinamico;