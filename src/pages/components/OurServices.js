import React from "react";
import ArrowIcon from "./icons/ArrowIcon";
import FacebookIcon from "./icons/FacebookIcon";
import FunilIcon from "./icons/FunilIcon";
import GoogleIcon from "./icons/GoogleIcon";
import InboundIcon from "./icons/InboundIcon";
import ManagmentIcon from "./icons/ManagmentIcon";
import './OurServices.css'

const OurServices = () => {

    const list = [
        {
            icon: <FunilIcon />,
            description: 'Funil de Vendas Personalizado'
        },
        {
            icon: <GoogleIcon />,
            description: 'Google Ads'
        },
        {
            icon:  <FacebookIcon />,
            description: 'Facebook Ads'
        },
        {
            icon: <ManagmentIcon />,
            description: 'Gestão Estratégica'
        },
        {
            icon: <ArrowIcon />,
            description: 'Tráfego Pago'
        },
        {
            icon: <InboundIcon />,
            description: 'Inbound Marketing'
        }
    ]

    const itemService = list.map((item) => {
        return(
            <div className="OurServices__Block-item" key={item.description}>
                <div className="OurServices__Block-itemIcon">{item.icon}</div>
                <div className="OurServices__Block-itemDesc">{item.description}</div>
            </div>
        )
    })
        

    return(
        <section className="OurServices" id='OurServices'>
            <h2>Nossos Serviços</h2>
            <div className="OurServices__Block">
                {itemService}
            </div>
            <a href='https://nux514f6cjp.typeform.com/to/itgZsLcm' target='_blanck'>Mais Informações</a>
        </section>
    )
}

export default OurServices