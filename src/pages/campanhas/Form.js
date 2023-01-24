import React, { useState } from "react";
import './Form.css'

const Form = ({campanha}) => {
const [cadastro, setCadatro] = useState({
    Nome: '',
    Email: '',
    Telefone: '',
    Instagram: '',
    Cargo: '',
    campanha: campanha
})

const url = 'https://script.google.com/macros/s/AKfycbzm0cPK509VaZ1Cwf3wB2R8bixnDDM4PZTAzwnpuhdXB4lPNA4HpEcfvkY5_5rTdSJ3xA/exec'

    async function sendRequest(e){
        console.log(e)
        const requestOptions = {
          method: "POST",
          mode: 'no-cors',
          headers: {
             "Content-Type": "application/json",
          },
          body: JSON.stringify({...cadastro})
        };
        let response = await fetch(url, requestOptions);
        let data = await response.text(); //or .json()
        console.log(data);
        window.location.href = "/obrigado"
}

    return (
        <section className="formulario">
            <div>
                <h2>AGENDE UMA SESSÃO ESTRATÉGICA E DESCUBRA O PASSO A PASSO.</h2>
                <p>PREENCHA O FORMULÁRIO ABAIXO</p>
            </div>
            <div className="inputs">
                <input type='text' required className="inputForm"
                    value={cadastro.Nome} onChange={(e) => setCadatro({...cadastro, Nome: e.target.value})}  placeholder="Nome e Sobrenome" /><br />
                <input type='email' required className="inputForm"
                    value={cadastro.Email} onChange={(e) => setCadatro({...cadastro, Email: e.target.value})}  placeholder="Seu melhor e-mail" /><br />
                <input type='text'required className="inputForm"
                 value={cadastro.Telefone} onChange={(e) => setCadatro({...cadastro, Telefone: e.target.value})}  
                placeholder="Seu número de WhatsApp com DDD" /><br />
                <input type='text' required className="inputForm"
                value={cadastro.Instagram} onChange={(e) => setCadatro({...cadastro, Instagram: e.target.value})}
                placeholder="Qual é seu Instagram" /><br />
                <input type='text' required className="inputForm"
                value={cadastro.Cargo} onChange={(e) => setCadatro({...cadastro, Cargo: e.target.value})}
                placeholder="Qual é seu cargo na empresa" /><br />
               <button type='submit' onClick={sendRequest}>Quero Receber o Contato da Mad Digital</button>
            </div>
        </section>
    )   
}

export default Form