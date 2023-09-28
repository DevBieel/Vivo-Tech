import React, {useState} from 'react'
import { useMediaQuery } from "@react-hook/media-query";
import './modal-mobile.css'
import './modal-desktop.css'

export default function Modal(props) {
const isMobile = useMediaQuery("(max-width: 700px)");

const celularArmazenado = localStorage.getItem('celular');
const emailArmazenado = localStorage.getItem('email');

  return (
    <section className= {isMobile ? 'modal-mobile' : 'modal-desktop'}>
        <div className = {isMobile ? 'modal-content-mobile' : 'modal-content-desktop'}>
            <div className = {isMobile ? 'modal-header-mobile' : 'modal-header-desktop'}>
                <h4 className = {isMobile ? 'modal-title-mobile' : 'modal-title-desktop'}>
                    Confirmar os dados digitados
                </h4>
            </div>
            <div className= {isMobile ? 'modal-body-mobile' : 'modal-body-desktop'}>
                <div className = 'contact'>
                    Caro(a) cliente, seus dados foram preenchidos :)
                </div>
                <div className = 'contact2'>
                Em até dois dias úteis você receberá o contato de um de nossos consultores Vivo Empresas.
                </div>
                <div className = 'correct-data'>
                    Os dados abaixo estão correto?
                </div>
                <div className = 'data-container'>
                    <p>{celularArmazenado}</p>
                    <p>{emailArmazenado}</p>
                </div>
            </div>
            <div className = {isMobile ? 'modal-footer-mobile' : 'modal-footer-desktop'}>
                <div className= {isMobile ? 'modal-buttons-mobile' : 'modal-buttons-desktop'}>
                    <button onClick={() => props.handleModal()}>Corrigir dados</button>
                    <button onClick={() => props.linkPag('home')}>Os dados estão corretos</button>
                </div>
            </div>
        </div>
    </section>
  )
}
