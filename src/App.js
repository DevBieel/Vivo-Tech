import React, {useState, useEffect} from "react"
import Home from "./componentes/home/Home"
import Cadastro from "./componentes/cadastro/Cadastro"

export default function App(){


    //Criando o state para armazenar a página atual
    const [pagina, setPagina] = useState('home');

    //Função que vai atribuir a página ao state 'pagina'
    useEffect(
      () =>{
        const url = window.location.href;
        const novaUrl = url.split('?');
        setPagina(novaUrl[1]);
        localStorage.clear();
      }
    )


    //Função que vai atribuir o link
    const linkPag = (p) =>{
      if(p == 'cadastro'){
        window.open('http://192.168.0.83:3000?cadastro', '_self')
      }else{
        window.open('http://192.168.0.83:3000', '_self')
      }
    }

    //criando a função que vai verificar a página e retornar o componente
    const verificarPagina = () =>{
      if(pagina == 'cadastro'){
        return <Cadastro
        linkPag = {linkPag}
        />
      }else{
        return <Home 
          linkPag = {linkPag}
        />
      }
    }

  return(
    <>
     {verificarPagina()}
    </>
  )
}
