import React, {useState} from 'react'
import { Link } from "react-scroll"
import { useMediaQuery } from "@react-hook/media-query";
import "./main-desktop.css"
import "./main-mobile.css"

export default function Main() {

    const [abaAtual, setAba] = useState(1);

    const handleAba = (index) =>{
        setAba(index);
    }

    const isMobile = useMediaQuery("(max-width: 700px)")
  return (
    <main>
        <section className= {isMobile ? 'principal-container-mobile' : 'principal-container-desktop'}>
        <section className='introduction'>
                <h1>Cliente Vivo Empresas</h1>
                <Link to = "apresentation-container-mobile" smooth = {true} duration={500} offset={-100}>
                    <p>Conheça nossos serviços de<br/>Solução de TI</p>
                </Link>
            </section>
            <section className= {isMobile ? 'tabs-area-mobile' : 'tabs-area-desktop'}>
                <ul className='buttons-area'>
                    <li className={`tabs-button ${abaAtual === 1 ? 'ativo' : ''}`} onClick = {() => handleAba(1)}>Sobre</li>
                    <li className= {`tabs-button ${abaAtual === 2 ? 'ativo' : ''}`} onClick = {() => handleAba(2)}>Vantagens</li>
                    <li className= {`tabs-button ${abaAtual === 3 ? 'ativo' : ''}`} onClick = {() => handleAba(3)}>Equipamentos</li>
                    <li className= {`tabs-button ${abaAtual === 4 ? 'ativo' : ''}`} onClick = {() => handleAba(4)}>Fidelidade</li>
                </ul>
                <section className= {isMobile ? 'tech-container-mobile' : 'tech-container-desktop'}>
                    <section className= {`conteudo ${abaAtual === 1 ? 'ativo' : ''}`}>
                        <h2>Vivo Tech</h2>
                        <p>
                        O Vivo Soluciona TI foi criado pela Vivo como uma solução de informatica para a sua empresa.<br/>Visando sempre agregar na questão de serviços de tecnologia da informação para expandir o crescimento do seu negócio. 
                        </p>
                    </section>
                    <section className= {`conteudo ${abaAtual === 2 ? 'ativo' : ''}`} id = 'tabs-two'>
                        <h2>Somente benefícios</h2>
                        <p>
                        O Vivo Tech disponibiliza equipamentos de informatica atualizados e de ótimo desempenho.<br/>Todos os equipamentos vem acompanhados de seguro contra roubo, furto e incêndio e também acompanham assistência técnica por parte da Vivo, olha só que legal :)<br/>Além disso o valor do equipamento já é cobrado diretamente na sua fatura Vivo não compremetendo o capital de giro da sua empresa e tirando a necessidade do uso de cartão de crédito.
                        </p>
                    </section>
                    <section className= {`conteudo ${abaAtual === 3 ? 'ativo' : ''}`}>
                        <h2>Marcas renomadas</h2>
                        <p>
                        Nosso portifólio de equipamentos é composto por diversas marcas renomadas no mercado, como: Samsung, Vaio, Positivo, Dell e Lenovo.<br/>Basta apenas escolher o produto que melhor se adeque as necessidades da sua empresa.
                        </p>
                    </section>
                    <section className= {`conteudo ${abaAtual === 4 ? 'ativo' : ''}`}>
                        <h2>Pensando no melhor para você cliente</h2>
                        <p>
                        O prazo de fidelidade do Vivo Tech foi pensado por nosso time de especialisas de acordo com a vida útil do equipamento.<br/>Sendo assim, sua empresa sempre terá tecnologia de ponta com equipamentos sempre atualizados.
                        </p>
                    </section>
                </section>
            </section>
            <section className= {isMobile ? 'ti-image-container-mobile' : 'ti-image-container-desktop'}>
                    <img src= "./notebook.png" alt="Imagem VSTI"/>
                </section>
            <section className= {isMobile ? 'apresentation-container-mobile' : 'apresentation-mobile-desktop'}> 
                <div className="oque-e">
                    <h4><span className = 'letter-o'>O</span> que é o Vivo Soluciona TI?</h4>
                    <p>
                        É uma prestação de serviços criada pela Vivo pensando exclusivamente na sua empresa.
                    </p>
                </div>
                <div className="oque--">
                    <h4><span>O</span> que o Vivo Soluciona TI<br/>me oferece?</h4>
                    <p>
                        O Vivo Tech oferece uma solução de TI completa, incluindo equipamentos <i>notebooks</i>, <i>desktops</i> e <i>tablets</i>.<br/>
                        Todos os equipamentos vem acompanhados de seguro contra roubo, furto e incêndio e assistência técnica 24 horas por dia 7 dias por semana
                    </p>
                </div>
                <div className="marcas">
                    <h4><span>Q</span>uais marcas de equipamentos posso escolher?</h4>
                    <p>
                        Nosso portifólio esta repleto de marcas renomadas no mercado como, <strong>Positivo</strong>, <strong>Vaio</strong>, <strong>Dell</strong>, <strong>Lenovo</strong> e <strong>Samsung</strong>.<br/>
                        Basta escolher a marca e o equipamento que mais se adequem as suas necessidades.
                    </p>
                </div>
                <div className="payment">
                    <h4><span>C</span>omo é feito o pagamento da prestação de serviço?</h4>
                    <p>
                        O Vivo Soluciona TI é atrelado ao seu plano de Telefonia fixo atual, ou seja, não é necessário utilizar cartão de crédito ou dar algum valor de entrada, o valor da prestação de serviço é cobrado mensalmente na sua fatura Vivo<br/>
                        Viu só que legal :)
                    </p>
                </div>
                <div className="contratar">
                    <h4><span>E</span> como faço para contratar?</h4>
                    <p>
                        É simples, basta clicar no menu localizado no canto superior direito e depois em <strong>"Quero contratar"</strong>.
                    </p>
                </div>
            </section>
        </section>
    </main>
  )
}
