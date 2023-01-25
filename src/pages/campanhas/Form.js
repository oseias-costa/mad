import React, { useState } from "react";
import './Form.css'

const Form = ({campanha}) => {
const [cadastro, setCadatro] = useState({
    Nome: '',
    Email: '',
    Telefone: '',
    Instagram: '',
    Cargo: '',
    campanha: campanha,
    VoceJaInvestiuEmAds: '',
    RecursoAds: '',
    RecursoMad: ''    
})
const [ err, setErr ] = useState('')

const verify = cadastro.Nome !== '' && 
    cadastro.Email !== '' &&
    cadastro.Telefone !== '' &&
    cadastro.Instagram !== '' &&
    cadastro.Cargo !== '' &&
    cadastro.VoceJaInvestiuEmAds !== '' &&
    cadastro.RecursoMad !== '' &&
    cadastro.RecursoAds !== '' 

console.log(verify)
console.log(cadastro)

const url = 'https://script.google.com/macros/s/AKfycbwxh0OIPzX1wiJi-IfXjCOyXtIq3VNQDzbBCx8sIiUCNAbCMD09eTPS0M_GeHAwqgAb5A/exec'

    async function sendRequest(e){
        
        if(verify){
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
    } else {
        setErr('Todos os campos devem ser preenchidos.')
    }

}

    return (
        <section className="formulario" id='formulario'>
            <div>
                <h2>AGENDE UMA SESSÃO ESTRATÉGICA E DESCUBRA O PASSO A PASSO.</h2>
                <p>PREENCHA O FORMULÁRIO ABAIXO</p>
            </div>
            <div className="inputs">
                <input type='text' required className="inputForm"
                    value={cadastro.Nome} onChange={(e) => setCadatro({...cadastro, Nome: e.target.value})}  placeholder="Nome e Sobrenome" /><br />
                <input type='text' required className="inputForm"
                    value={cadastro.NomeDaEmpresa} onChange={(e) => setCadatro({...cadastro, NomeDaEmpresa: e.target.value})}  placeholder="Nome da Empresa" /><br />
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
                <form>
                    <p>Você já investiu em Ads?</p>
                    <div>
                    <input type='radio' onChange={e => setCadatro({...cadastro, VoceJaInvestiuEmAds: e.target.value})} value='Sim' name='opcao' /><p>Sim</p>
                    <input  className="nao"  type='radio' onChange={e => setCadatro({...cadastro, VoceJaInvestiuEmAds: e.target.value})} value='Não' name='opcao' /><p>Não</p>
                    </div>
                </form>
                <form>
                    <p>Hoje os valores praticados pela nossa empresa partem de R$ 1.000 até R$ 2.500 mês, você está de acordo?</p>
                    <div>
                    <input type='radio' onChange={e => setCadatro({...cadastro, RecursoMad: e.target.value})} value='Sim' name='opcao' /><p>Sim</p>
                    <input className="nao" type='radio' onChange={e => setCadatro({...cadastro, RecursoMad: e.target.value})} value='Não' name='opcao' /><p>Não</p>
                    </div>
                </form>
                <form>
                    <p>Recomendamos o investimento mínimo diário de R$ 35,00 por dia nas plataformas, tudo bem para você?</p>
                    <div>
                    <input type='radio' onChange={e => setCadatro({...cadastro, RecursoAds: e.target.value})} value='Sim' name='opcao' /><p>Sim</p>
                    <input  className="nao"  type='radio' onChange={e => setCadatro({...cadastro, RecursoAds: e.target.value})} value='Não' name='opcao' /><p>Não</p>
                    </div>
                </form>
                <p className="error">{err !== '' && verify ? null : err}</p>
               <button type='submit' onClick={sendRequest}>Quero Receber o Contato da Mad Digital</button>
            </div>
        </section>
    )   
}

export default Form
