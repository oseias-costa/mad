import React, { useState } from "react";
import './Clients.css'
import Left from "./icons/Left";
import Rigth from "./icons/Rigth";
import { logos } from "../../data/logos";

const Clients = () => {
    const [pageLogo, setPageLogo ] = useState(0)
    const arrowRight = pageLogo == 0 || pageLogo == 1 ? 'disabled' : 'active'
    const arrowLeft = pageLogo == 2 || pageLogo == 1 ? 'disabled' : 'active'

    const handlePageNumber = (type) => {
        if(type === 'right'){
            return pageLogo === 0 || pageLogo === 1 ? pageLogo + 1 : 2
        }

        if(type === 'left'){
            return pageLogo === 1 || pageLogo === 2 ? pageLogo - 1 : 0
        }
    }

    const classSlider = ['Clients__Slide-activ', 'Clients__Slide-hidden', 'Clients__Slide-btnActiv', 'Clients__Slide-btn' ]
    return(
        <section className="Clients" id="Clients"> 
            <Rigth  onClick={() =>setPageLogo(handlePageNumber('right'))} className={`Clients__Slide-right ${arrowRight}`} />
            <Left onClick={() =>setPageLogo(handlePageNumber('left'))} className={'Clients__Slide-left ' + arrowLeft} />
            <h2>Alguns de Nossos Clientes</h2>
            <div className={ pageLogo === 0 ? 'Clients__Slide-activ' : 'Clients__Slide-hidden' }>
              <img key={logos[0].title} src={logos[0].icon} alt={`Logo da Empresa ${logos[0].title}`} className="Clients__Logo"/>
              <img key={logos[1].title} src={logos[1].icon} alt={`Logo da Empresa ${logos[1].title}`} className="Clients__Logo"/>
              <img key={logos[2].title} src={logos[2].icon} alt={`Logo da Empresa ${logos[2].title}`} className="Clients__Logo"/>
              <img key={logos[3].title} src={logos[3].icon} alt={`Logo da Empresa ${logos[3].title}`} className="Clients__Logo"/>
              <img key={logos[4].title} src={logos[4].icon} alt={`Logo da Empresa ${logos[4].title}`} className="Clients__Logo"/>
              <img key={logos[5].title} src={logos[5].icon} alt={`Logo da Empresa ${logos[5].title}`} className="Clients__Logo"/>
              <img key={logos[6].title} src={logos[6].icon} alt={`Logo da Empresa ${logos[6].title}`} className="Clients__Logo"/>
              <img key={logos[7].title} src={logos[7].icon} alt={`Logo da Empresa ${logos[7].title}`} className="Clients__Logo"/>
              <img key={logos[8].title} src={logos[8].icon} alt={`Logo da Empresa ${logos[8].title}`} className="Clients__Logo"/>
              <img key={logos[9].title} src={logos[9].icon} alt={`Logo da Empresa ${logos[9].title}`} className="Clients__Logo"/>
              <img key={logos[10].title} src={logos[10].icon} alt={`Logo da Empresa ${logos[10].title}`} className="Clients__Logo"/>
              <img key={logos[11].title} src={logos[11].icon} alt={`Logo da Empresa ${logos[11].title}`} className="Clients__Logo"/>
              <img key={logos[12].title} src={logos[12].icon} alt={`Logo da Empresa ${logos[12].title}`} className="Clients__Logo"/>
              <img key={logos[13].title} src={logos[13].icon} alt={`Logo da Empresa ${logos[13].title}`} className="Clients__Logo"/>
              <img key={logos[14].title} src={logos[14].icon} alt={`Logo da Empresa ${logos[14].title}`} className="Clients__Logo"/>
            </div>
            <div className={  pageLogo === 1 ? 'Clients__Slide-activ' : 'Clients__Slide-hidden' }>
                <img key={logos[15].title} src={logos[15].icon} alt={`Logo da Empresa ${logos[15].title}`} className="Clients__Logo"/>
                <img key={logos[16].title} src={logos[16].icon} alt={`Logo da Empresa ${logos[16].title}`} className="Clients__Logo"/>
                <img key={logos[17].title} src={logos[17].icon} alt={`Logo da Empresa ${logos[17].title}`} className="Clients__Logo"/>
                <img key={logos[18].title} src={logos[18].icon} alt={`Logo da Empresa ${logos[18].title}`} className="Clients__Logo"/>
                <img key={logos[19].title} src={logos[19].icon} alt={`Logo da Empresa ${logos[19].title}`} className="Clients__Logo"/>
                <img key={logos[20].title} src={logos[20].icon} alt={`Logo da Empresa ${logos[20].title}`} className="Clients__Logo"/>
                <img key={logos[21].title} src={logos[21].icon} alt={`Logo da Empresa ${logos[21].title}`} className="Clients__Logo"/>
                <img key={logos[22].title} src={logos[22].icon} alt={`Logo da Empresa ${logos[22].title}`} className="Clients__Logo"/>
                <img key={logos[23].title} src={logos[23].icon} alt={`Logo da Empresa ${logos[23].title}`} className="Clients__Logo"/>
                <img key={logos[24].title} src={logos[24].icon} alt={`Logo da Empresa ${logos[24].title}`} className="Clients__Logo"/>
                <img key={logos[25].title} src={logos[25].icon} alt={`Logo da Empresa ${logos[25].title}`} className="Clients__Logo"/>
                <img key={logos[26].title} src={logos[26].icon} alt={`Logo da Empresa ${logos[26].title}`} className="Clients__Logo"/>
                <img key={logos[27].title} src={logos[27].icon} alt={`Logo da Empresa ${logos[27].title}`} className="Clients__Logo"/>
                <img key={logos[28].title} src={logos[28].icon} alt={`Logo da Empresa ${logos[28].title}`} className="Clients__Logo"/>
                <img key={logos[29].title} src={logos[29].icon} alt={`Logo da Empresa ${logos[29].title}`} className="Clients__Logo"/>
            </div>
            <div className={  pageLogo === 2 ? 'Clients__Slide-activ' : 'Clients__Slide-hidden' }>
                <img key={logos[30].title} src={logos[30].icon} alt={`Logo da Empresa ${logos[30].title}`} className="Clients__Logo"/>
                <img key={logos[31].title} src={logos[31].icon} alt={`Logo da Empresa ${logos[31].title}`} className="Clients__Logo"/>
                <img key={logos[32].title} src={logos[32].icon} alt={`Logo da Empresa ${logos[32].title}`} className="Clients__Logo"/>
                <img key={logos[33].title} src={logos[33].icon} alt={`Logo da Empresa ${logos[33].title}`} className="Clients__Logo"/>
                <img key={logos[34].title} src={logos[34].icon} alt={`Logo da Empresa ${logos[34].title}`} className="Clients__Logo"/>
                <img key={logos[35].title} src={logos[35].icon} alt={`Logo da Empresa ${logos[35].title}`} className="Clients__Logo"/>
                <img key={logos[36].title} src={logos[36].icon} alt={`Logo da Empresa ${logos[36].title}`} className="Clients__Logo"/>
                <img key={logos[37].title} src={logos[37].icon} alt={`Logo da Empresa ${logos[37].title}`} className="Clients__Logo"/>
                <img key={logos[38].title} src={logos[38].icon} alt={`Logo da Empresa ${logos[38].title}`} className="Clients__Logo"/>
                <img key={logos[39].title} src={logos[39].icon} alt={`Logo da Empresa ${logos[39].title}`} className="Clients__Logo"/>
                <img key={logos[40].title} src={logos[40].icon} alt={`Logo da Empresa ${logos[40].title}`} className="Clients__Logo"/>
                <img key={logos[41].title} src={logos[41].icon} alt={`Logo da Empresa ${logos[41].title}`} className="Clients__Logo"/>
                <img key={logos[42].title} src={logos[42].icon} alt={`Logo da Empresa ${logos[42].title}`} className="Clients__Logo"/>
                <img key={logos[43].title} src={logos[43].icon} alt={`Logo da Empresa ${logos[43].title}`} className="Clients__Logo"/>
                <img key={logos[44].title} src={logos[44].icon} alt={`Logo da Empresa ${logos[44].title}`} className="Clients__Logo"/>
            </div>
            <div>
                {/* <button className={ pageLogo === 0  ? classSlider[2]  : 'disable' }></button>
                <button className={ pageLogo === 1 ? classSlider[2]  : 'disable' }></button>
                <button className={ pageLogo === 2 ? classSlider[2]  : 'disable' }></button> */}
            </div>
            <div className="Clients__btn">
            <a href='https://nux514f6cjp.typeform.com/to/itgZsLcm' target='_blanck'>Escalar meu Negócio</a>
            </div>
        </section>
    )
}

export default Clients