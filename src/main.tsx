import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>,

  },

  
  {
    path: "/sobre",
    element:  

    <>
    <Header/>
    <div className="content-main">Página Sobre!</div>
    <Footer/>
    </>,

  },

  {
    path: "/noticias",
    element: 
    <>
    <Header/>
    <div className="content-main">Noticias</div>
    <Footer/>
    </>,
  },

  {
    path: "/contato",
    element:
     <>
    <Header/>
   
    <div className="container">
        <h1>Formulário de Contato</h1> 
        <form>
          <div>
            <input type="text" placeholder='Insira o nome'></input>
          </div>
          <div>
            <input type="number" placeholder='Insira o orçamento total'></input>
          </div>
          <div>
            <select name='category_id'></select>
            <option disabled>Selecione a categoria</option>
          </div>
          <div>
            <input type="submit" value="Criar projeto" />
          </div>
        </form>
      
    </div>
    <Footer/>
    </>,
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)