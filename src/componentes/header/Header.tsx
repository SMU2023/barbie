import './Header.css'
function Header(){
    const texto = "samuel"
   
    return(
        <>
        <header>
            <div className = "logo">
            <img src = "./public/logo.com.png" alt ="logo"></img>
      <p>Estreia mundial</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <input className= "barrapesquisa" type= "text"></input>
                    </li>
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
        <div>
           
            <p className = "texto_digitado"> pesquisa: {texto}</p>
        </div>

        </>
    )
}
export default Header