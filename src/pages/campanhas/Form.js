import React from "react";
import './Form.css'

const Form = () => {
    return (
        <section className="formulario">
            <div>
                <h2>AGENDE UMA SESSÃO ESTRATÉGICA E DESCUBRA O PASSO A PASSO.</h2>
                <p>PREENCHA O FORMULÁRIO ABAIXO</p>
            </div>
            <div className="inputs">
                <input type='text' placeholder="Nome e Sobrenome" /><br />
                <input type='text' placeholder="Seu melhor e-mail" /><br />
                <input type='text' placeholder="Seu número de WhatsApp com DDD" /><br />
                <input type='text' placeholder="Qual é seu Instagram" /><br />
                <input type='text' placeholder="Qual é seu cargo na empresa" /><br />
                <button>Quero Receber o Contato da Mad Digital</button>
            </div>
        </section>
    )   
}

export default Form