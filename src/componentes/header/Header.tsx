import './Header.css'
import {Link} from 'react-router-dom'
function Header(){

    return(
        
        <header>
            <div className = "logo">
            {/*<img src = "./public/logo.com.png" alt ="logo"></img>*/}
            <Link to="/"><img src = "./public/logo.com.png" alt ="logo"></img></Link>
      <p>Estreia mundial</p>
            </div>
            <nav>
                <ul>
                    <li>
                        {/*<a href="/">Página inicial</a>*/}
                        <Link to="/">Pagina inicial</Link>
                    </li>
                    <li>
                        {/*<a href="/sobre">Sobre</a>*/}
                        <Link to="/sobre">Sobre</Link>
                        
                    </li>
                    <li>
                       { /*<a href="/noticias">Notícias</a>*/}
                       <Link to="/noticias">Noticias</Link>
                    </li>
                    <li>
                        {/*<a href="/contato">Contato</a>*/}
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header