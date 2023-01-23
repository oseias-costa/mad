import React, { useState } from "react";
import './Form.css'
import  axios  from "axios";

const Form = () => {
const [cadastro, setCadatro] = useState({
    Nome: '',
    Email: '',
    Telefone: '',
    Instagram: '',
    Cargo: '',
    campanha: 'clinica'
})

const Send = () => {
    axios.post('https://script.google.com/macros/s/AKfycbyU1lbwdubafmshznnsZoZaAyLKdTRisPW0T65diIzHt5ja-X29sRbYbg6gNgVV3zt2NA/exec',
             {
            ...cadastro
        })
}

    return (
        <section className="formulario">
            <div>
                <h2>AGENDE UMA SESSÃO ESTRATÉGICA E DESCUBRA O PASSO A PASSO.</h2>
                <p>PREENCHA O FORMULÁRIO ABAIXO</p>
            </div>
            <div className="inputs">
                <input type='text' 
                    value={cadastro.Nome} onChange={(e) => setCadatro({...cadastro, Nome: e.target.value})}  placeholder="Nome e Sobrenome" /><br />
                <input type='text'  
                    value={cadastro.Email} onChange={(e) => setCadatro({...cadastro, Email: e.target.value})}  placeholder="Seu melhor e-mail" /><br />
                <input type='text'
                 value={cadastro.Telefone} onChange={(e) => setCadatro({...cadastro, Telefone: e.target.value})}  
                placeholder="Seu número de WhatsApp com DDD" /><br />
                <input type='text' 
                value={cadastro.Instagram} onChange={(e) => setCadatro({...cadastro, Instagram: e.target.value})}
                placeholder="Qual é seu Instagram" /><br />
                <input type='text' 
                value={cadastro.Cargo} onChange={(e) => setCadatro({...cadastro, Cargo: e.target.value})}
                placeholder="Qual é seu cargo na empresa" /><br />
                <button onClick={Send}>Quero Receber o Contato da Mad Digital</button>
            </div>
        </section>
    )   
}

export default Form