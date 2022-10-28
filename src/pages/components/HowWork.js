import React from "react";
import './HowWork.css'
import {Verified} from "./utils/icons";

const HowWork = () => {
    const list = [
        {
            title: 'Captação de dados e modo de conduta do público alvo',
            content: 'Estrutura para você identificar quem são as pessoas que realmente tem potencial de comprar da sua empresa'
        },
        {
            title: 'Inbound Marketing',
            content: 'Foco se concentra toalmente na captação de novos clientes'
        },
        {
            title: 'Estrategia de Branding para a marca',
            content: 'Análise detalhada da persona e aumento do engajamento nas redes, devido ao fluxo de novas pessoas e clientes'
        }
    ]

    const renderList = list.map((item) => (
     <li className="HowWork__Item">
        <div className="HowWork__Item-icon">
            <Verified />
        </div>
        <div>
            <h4 className="HowWork__Item-subtitle">{item.title}</h4>
            <p className="HowWork__Item-content">{item.content}</p>  
        </div>
    </li>
    )
)

    return(
        <section className="HowWork" id='HowWork'>
            <h2>Entenda como funciona o Método Mad</h2>
            <ul>
                {renderList}
            </ul>
        </section>
    )
}

export default HowWork
