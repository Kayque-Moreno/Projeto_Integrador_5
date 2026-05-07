import './ListaProdutos.css';

function ListaProdutos() {
  const produtos = [
    { id: 1, nome: "Teclado", preco: "R$ 250", classe: "card-azul" },
    { id: 2, nome: "Mouse Gamer", preco: "R$ 120", classe: "card-verde" },
    { id: 3, nome: "Monitor 144hz", preco: "R$ 1.100", classe: "card-amarelo" },
  ];

  return (
    <div className="container">
      <h1>Lista de Produtos</h1>

      {produtos.map((produto) => (
        <div key={produto.id} className={`produto-card ${produto.classe}`}>
          <span className="nome">{produto.nome}</span>
          <span className="preco">{produto.preco}</span>
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;