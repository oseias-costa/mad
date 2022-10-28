import React from "react";
import { 
    FunilIcon,
    GoogleIcon,
    FacebookIcon,
    ManagmentIcon,
    ArrowIcon,
    InboundIcon
} from "./utils/icons";
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
            icon: <FacebookIcon />,
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
            <div className="OurServices__Block-item">
                <div className="OurServices__Block-itemIcon">{item.icon}</div>
                <div className="OurServices__Block-itemDesc">{item.description}</div>
            </div>
        )
    })
        

    return(
        <section className="OurServices">
            <h2>Nossos Serviços</h2>
            <div className="OurServices__Block">
                {itemService}
            </div>
            <a href="#">Mais Informações</a>
        </section>
    )
}

export default OurServices