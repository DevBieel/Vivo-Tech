import React, {useState, useRef, useEffect} from 'react'
import CH from "./cHeader/CadastroHeader"
import { useMediaQuery } from "@react-hook/media-query";
import "./cadastro-desktop.css"
import "./cadastro-mobile.css"
import Modal from "./modal/Modal"

export default function Cadastro(props) {


  //ref que vai armazenar o botão
  const refBotao = useRef(null);

//State que vai armazenar se o dispositivo é um dispositivo mobile ou desktop
const isMobile = useMediaQuery("(max-width: 700px)");

//Script do código



//Função e state para validar o input razao social
const [isRazao, setRazao] = useState('');
const handleRazao = (e) =>{
setRazao(e.target.value);
}

const razaoValida = isRazao != '';

//Função e state para validar e formatar o input cnpj
const [isCnpj, setCnpj] = useState('');
const [cnpjValido, setCnpjValido] = useState(null);
const handleCnpj = (e) =>{
  let valor = e.target.value;
  let length = valor.length;
  valor = valor.replace(/\D/g, "");
  valor = valor.substring(0,14);
  if(length <= 18){
    valor = valor.replace(/(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1/$2");
    valor = valor.replace(/(\d{4})(\d{1,2})/, "$1-$2");
  }
  if(length === 18){
    setCnpjValido(true);
  }else{
    setCnpjValido(false);
  }
  setCnpj(valor);
}


//State e função para armazenar o número de telefone celular e formatar o número de telefone celular
const [celular, setCelular] = useState('');
const [celularValido, setCelularValido] = useState(null);
const handleCelular = (e) =>{
  let valor = e.target.value;
  let length = valor.length;
  valor = valor.replace(/\D/g, "");
  valor = valor.substring(0,11);
  if(length <= 15){
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d{1,4})/, "$1-$2");
  }
  if(length === 15){
    setCelularValido(true);
  }else{
    setCelularValido(false);
  }
  setCelular(valor);
}

//State e regex que vão armazenar e validar o e-mail digitado pelo usuário
const [email, setEmail] = useState('');
const [emailValido, setEmailValido] = useState(null);
const handleEmail = (e) =>{
  let valor = e.target.value;
  let regex = /^[\w\.-]+@[A-Za-z\d\.-]+\.[\A-Za-z]{2,}$/
  if(regex.test(valor)){
    setEmailValido(true);
    setEmail(valor)
  }else{
    setEmailValido(false);
    setEmail(valor)
  }
}


//State e função que vai validar se todos os campos estão preenchidos corretamente e se estão preenchidos com pelo menos algum valor, e exibir o botão

const [allValid, setAllvalid] = useState(false);

const handleAllValid = () =>{
  if(cnpjValido && celularValido && emailValido){
    setAllvalid(true);
  }else{
    setAllvalid(false);
  }
}


//Função e state que vai exibir o modal
const [modal, setModal] = useState(false);

const handleModal = () =>{
  setModal(!modal);

  //Armazenando o celular e o email no localStorage
    localStorage.setItem('celular', celular);
    localStorage.setItem('email', email)
}

useEffect(()=>{
  handleAllValid();
}, [cnpjValido, celularValido, emailValido])
console.log(allValid)
  return (
    <>
    <CH
    linkPag = {props.linkPag}
    />

     <main className = {isMobile ? "main-cadastro-mobile" : "main-cadastro-desktop"}>
          <section className = {isMobile ? 'principal-container-mobile' : 'principal-container-desktop'}>
            <section className= {isMobile ? 'empresa-container-mobile' : 'empresa-container-desktop'}>
              <div className= {isMobile ? 'empresa-titulo-mobile' : 'empresa-titulo-desktop'}>
                <h6>Dados da empresa</h6>
              </div>
              <div className = {isMobile ? 'inputs-empresa-mobile' : 'inputs-empresa-desktop'}>
                <div className = {isMobile ? 'razao-social-area-mobile' : 'razao-social-area-desktop'}>
                  <input type = 'text' id = 'input-razao' required/>
                  <label htmlFor='input-razao'>Razão Social</label>
                </div>
                <div className= {isMobile ? 'cnpj-area-mobile' : 'cnpj-area-desktop'}>
                  <input type = 'text' id = 'input-cnpj' value={isCnpj} onChange={(e) => handleCnpj(e)} required/>
                  <label htmlFor='input-cnpj'>CNPJ da Empresa</label>
                  <p className= {`validations ${cnpjValido === false ? 'nv' : ''}`}><small>CNPJ Inválido</small></p>
                </div>
              </div>
            </section>
            <section className = {isMobile ? 'contato-container-mobile' : 'contato-container-desktop'}>
              <div className = {isMobile ? 'contato-titulo-mobile' : 'contato-titulo-desktop'}>
                <h6>Dados para Contato</h6>
              </div>
              <div className= {isMobile ? 'inputs-contato-mobile' : 'inputs-contato-desktop'}>
                <div className= {isMobile ? 'telefone-area-mobile' : 'telefone-area-desktop'}>
                  <input type = 'text' id = 'input-celular' required value={celular} onChange={(e) => handleCelular(e)}/>
                  <label htmlFor='input-celular'>Telefone Celular</label>
                  <p className= {`validations ${celularValido === false ? 'nv' : ''}`}><small>Telefone Inválido</small></p>
                </div>
                <div className = {isMobile ? 'email-area-mobile' : 'email-area-desktop'}>
                  <input type = 'text' id = 'input-email' required onChange={(e) => handleEmail(e)}/>
                  <label htmlFor='input-email'>Seu E-mail</label>
                  <p className= {`validations ${emailValido === false ? 'nv' : ''}`}><small>E-mail Inválido</small></p>
                </div>
              </div>
            </section>
            <section className = {isMobile ? 'button-area-mobile' : 'button-area-desktop'}>
              <button type = 'button' id = 'sendButton' className='btn btn-primary' disabled = {!allValid} ref={refBotao} onClick = {() => handleModal()}>Enviar</button>
            </section>
          </section>
          <section className = {isMobile ? 'button-container-mobile' : 'button-container-desktop'}>
              <button type = 'button' id = 'botaoEnviar'  disabled = {!allValid} ref={refBotao} onClick = {() => handleModal()}>Enviar</button>
            </section>
          {modal && <Modal
          handleModal = {handleModal}
          linkPag = {props.linkPag}
          />}
      </main>
    </>

   

  )
}
