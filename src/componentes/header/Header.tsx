import './Header.css'
function Header(){
    return(
        <header>
            <div className = "logo">
            <img src = "./public/logo.com.png" alt ="logo"></img>
      <p>Estreia mundial</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Página inicial</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header