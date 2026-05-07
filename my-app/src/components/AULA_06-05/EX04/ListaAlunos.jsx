import './ListaAlunos.css';

function ListaAlunos() {
  const alunos = [
    { id: 1, nome: "Alice", nota: 8.5 },
    { id: 2, nome: "Bruno", nota: 5.0 },
    { id: 3, nome: "Carla", nota: 7.0 },
    { id: 4, nome: "Diego", nota: 6.7 },
  ];

  return (
    <div className="container">
      <h2>Lista de Notas</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id} className="item">
            {aluno.nome}: 
            <span className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'}>
               {aluno.nota}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaAlunos;