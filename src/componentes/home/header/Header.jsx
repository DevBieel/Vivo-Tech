import React, {useState} from "react"
import { useMediaQuery } from "@react-hook/media-query";
import "./header-desktop.css"
import "./header-mobile.css"

export default function Header(props){

    const isMobile = useMediaQuery("(max-width: 700px)");

    //State que vai armazenar se o menu foi clicado ou não
    const [menuAtivo, setMenuAtivo] = useState(false);

    const handleMenu = () =>{
        setMenuAtivo(!menuAtivo);
    }

    return(
        <header className = {isMobile ? 'header-mobile' : 'header-desktop'}>
            <section className='image-container'>
                <img className= {isMobile ? 'logo-vivo-mobile' : 'logo-vivo-desktop'} src = 'https://logopng.com.br/logos/vivo-120.png' alt='Logo da Vivo'/>
            </section>
            <nav className="nav-menu">
                <ul className= {isMobile && menuAtivo ? 'navigation-mobile-ativo' : (isMobile ? 'navigation-mobile' : 'navigation-desktop')}>
                    <li className="nav-item" onClick = {() => props.linkPag('cadastro')}>Quero contratar</li>
                </ul>
            </nav>
            <div className= {isMobile && menuAtivo ? 'menu-mobile-ativo' : (isMobile ? 'menu-mobile' : 'menu-desktop')}onClick = {() => handleMenu()}>
                <span className= {isMobile ? 'bar' : ''}></span>
                <span className= {isMobile ? 'bar' : ''}></span>
                <span className= {isMobile ? 'bar' : ''}></span>
            </div>
        </header>
    )
}