import'./TelaUsuario.css'
function TelaUsuario(){
    const users = [
        { id: 1, nome: 'João', email: 'joao@example.com', telefone: '12345-6789' },
        { id: 2, nome: 'Maria', email: 'maria@maria.com', telefone: '98765-4321'},
        { id: 3, nome: 'Antonio', email: 'antonio@toninho.com', telefone: '11223-4455'},
        { id: 4, nome: 'Marta', email: 'marta@eu.com', telefone: '99875-3365'},
    ]

    return(
        <div className='usuarios'>
            {users.map((user) => (
                <div key={user.id} className='usuario'>
                    <h3>{user.nome}</h3>
                    <p>Email: {user.email}</p>
                    <p>Telefone: {user.telefone}</p>
                </div>
            ))}
        </div>
    )
}
export default TelaUsuario