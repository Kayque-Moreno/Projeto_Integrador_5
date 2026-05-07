import React from 'react';
import './Vitrine.css';

function Vitrine() {
  const produtos = [
    { id: 1, nome: "Tênis Sport", preco: "R$ 199", cat: "Calçados" },
    { id: 2, nome: "Relógio Digital", preco: "R$ 89", cat: "Acessórios" },
    { id: 3, nome: "Camiseta Dry", preco: "R$ 59", cat: "Roupas" },
    { id: 4, nome: "Boné Aba Curva", preco: "R$ 45", cat: "Acessórios" }
  ];

  return (
    <div className="container">
      {produtos.map((p) => (
        <div key={p.id} className="card">
          <div className="imagem-ficticia"></div>
          <span className="categoria">{p.cat}</span>
          <h3 className="nome">{p.nome}</h3>
          <p className="preco">{p.preco}</p>
          <button className="btn-comprar">Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default Vitrine;