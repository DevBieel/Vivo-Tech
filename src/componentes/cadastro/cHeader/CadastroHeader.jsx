import React, {useState} from "react"
import { useMediaQuery } from "@react-hook/media-query";
import "../../home/header/header-desktop.css"
import "../../home/header/header-mobile.css"

export default function CadastroHeader(props){

    //State que vai armazenar se o menu esta ativo ou não
    const [menuAtivo, setMenu] = useState(false);

    const handleMenu = () =>{
        setMenu(!menuAtivo);
    }

    const isMobile = useMediaQuery("(max-width: 700px)")

    return(
        
            <header className = {isMobile ? 'header-mobile' : 'header-desktop'}>
                <section className='image-container'>
                    <img className= {isMobile ? 'logo-vivo-mobile' : 'logo-vivo-desktop'} src = 'https://logopng.com.br/logos/vivo-120.png' alt = 'Logo da Vivo'/>
                </section>
                <nav className='nav-menu'>
                    <ul className= {isMobile && menuAtivo ? 'navigation-mobile-ativo' : (isMobile ? 'navigation-mobile' : 'navigation-desktop')}>
                        <li className = 'nav-item' onClick = {() => props.linkPag('home')}>Voltar</li>
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