import './ListaFilme.css'
function ListaFilme(){
    const filmes = [
        {id: 1, nome: "O Pequenino", categoria: "comédia", nota: 9.4},
        {id: 2, nome: "As Branquelas", categoria: "comédia", nota: 10.0},
        {id: 3, nome: "Até o Último Homem", categoria: "ação", nota: 9.6},
        {id: 4, nome: "Corra", categoria: "terror", nota: 7.5},
    ]

    return(
        <div className='filmes'>
        {filmes.map((filme) => (
            <div key={filme.id} className='filme'>
                <h3>{filme.nome}</h3>
                <p>Categoria: {filme.categoria}</p>
                <p>Nota: {filme.nota}</p>
                <button className='botao'>Assistir</button>
            </div>
        ))}
        </div>
    )
}
export default ListaFilme