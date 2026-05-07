import './Menu.css'
function Menu(){
    const links = ["Home", "Produtos", "Contato", "Sobre"]

    return(
        <nav className="navbar">
            <ul className="menu">
                {links.map((item, index)=>(
                    <li key={index} className="menu">
                        <a href={`#${item}`} className="menu-link">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Menu