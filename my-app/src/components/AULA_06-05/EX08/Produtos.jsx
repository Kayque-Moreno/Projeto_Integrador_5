import'./Produtos.css'

function Produtos() {
    const listaProdutos = [
        { id: 1, nome: 'Salgadinho Torcida', preco: 2.50},
        { id: 2, nome: 'Arroz 5kg', preco: 18.0},
        { id: 3, nome: 'Feijão 5kg', preco: 12.0},
        { id: 4, nome: 'Açucar 1kg', preco: 8.990},
        { id: 5, nome: 'Ref. Guaraná Antarctica', preco: 11.00},
        { id: 6, nome: 'Suco Tang', preco: 1.80},
    ];

    return(
        <div className='produtos'>
            {listaProdutos.map((produto) => ((
               <div key={listaProdutos.id} className='card-produto'>
                    <h2>{produto.nome}</h2> 
                    <p>Valor: R$ {produto.preco.toFixed(2)}</p>     
               </div>
            )))}
        </div>
    )
}
export default Produtos