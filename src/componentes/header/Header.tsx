import'./Header.css'
export default function Header(){
  return(
    <body>
        
    <header>
      <div>
     <img src = "./public/logo.com.png" alt ="logo"></img>
      <p>Estreia mundial</p>
      </div>
      <nav className = "navbar">
        <ul>
          <li>
          <a href = "#">Home</a>
          </li>
          <li>
          <a href = "#">Noticias</a>
          </li>
          <li>
          <a href = "#">Sobre</a>
          </li>
        </ul>
      </nav>
     
    </header>
    <footer className="footer">
    <div>
    <img src="./public/logo.com.png" alt="Logo da Empresa" className="footer-logo" />
    <p>&copy; 2023 Nome da Sua Empresa. Todos os direitos reservados.</p>
  </div>
        
      
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Página Inicial</a>
          </li>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Empresas</a>
          </li>
          <li>
            <a href="#">Ajuda</a>
          </li>
          <li>
            <a href="#">Comunidade</a>
            </li>
        </ul>
      </div>
    </footer>

    </body>
  )
}

  


