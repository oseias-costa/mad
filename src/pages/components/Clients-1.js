import React, { useState } from "react";
import './Clients.css'
import Left from "./icons/Left";
import Rigth from "./icons/Rigth";

import AmandaFelippe from '../../images/clients-logo/amandafelippe.png'
import DraVeronicaRosseto from '../../images/clients-logo/draveronicarosseto.png'
import Ivetu from '../../images/clients-logo/ivetu.png'
import Kichef from '../../images/clients-logo/kichef.png'
import Concept from '../../images/clients-logo/concept.png'
import LucyModas from '../../images/clients-logo/lucymodas.png'
import Pacheco from '../../images/clients-logo/madeireira.png'
import Molas from '../../images/clients-logo/molascidadeazul.png'
import Cabeceira from '../../images/clients-logo/cabeceira.png'
import OralBrasil from '../../images/clients-logo/oralbrasil.png'
import Tac from '../../images/clients-logo/tac.png'
import Virtuosa from '../../images/clients-logo/virtuosa.png'
import Coser from '../../images/clients-logo/coser-logo.png'
import Briancini from '../../images/clients-logo/briancini.png'
import Pampa from '../../images/clients-logo/pampa.png'
import PampaKia from '../../images/clients-logo/pampaKia.png'

import Ameii from '../../images/clients-logo/logos-svg/amei.png'
import ArcoIris from '../../images/clients-logo/logos-svg/arcoiris.png'
import BrasilBike from '../../images/clients-logo/logos-svg/brasilbike.png'
import CasaGrande from '../../images/clients-logo/logos-svg/casagrande.png'
import Cresol from '../../images/clients-logo/logos-svg/cresol.png'
import Evo from '../../images/clients-logo/logos-svg/evo.png'
import Hannas from '../../images/clients-logo/logos-svg/hanna.png'
import Volt from '../../images/clients-logo/logos-svg/volt.png'
import BemViver from '../../images/clients-logo/logos-svg/bemviver.png'
import Meurer from '../../images/clients-logo/logos-svg/meurer.png'
import Realize from '../../images/clients-logo/logos-svg/realize.png'
import Flexmatic from '../../images/clients-logo/logos-svg/flexmatic.png'
import CoserPremium from '../../images/clients-logo/coser-premium.png'
import Sls from '../../images/clients-logo/sls.png'


const Clients = () => {
    const [slideActiv, setSlideActiv ] = useState('Clients__Slide-activ')
    const [arrowRight, setArrowRight] = useState('active')   
    const [arrowLeft, setArrowLeft] = useState('disabled')   

    const slideOne = () => {
        setSlideActiv('Clients__Slide-hidden')
        setArrowRight('disable')
        setArrowLeft('active')
    }
    const slideTwo = () => {
        setSlideActiv('Clients__Slide-activ')
        setArrowRight('active')
        setArrowLeft('disable')
    }
    
    const classSlider = ['Clients__Slide-activ', 'Clients__Slide-hidden', 'Clients__Slide-btnActiv', 'Clients__Slide-btn' ]
    return(
        <section className="Clients" id="Clients"> 
        <Rigth onClick={slideOne} className={'Clients__Slide-right ' + arrowLeft} />
        <Left onClick={slideTwo} className={'Clients__Slide-left ' + arrowRight} />
            <h2>Alguns de Nossos Clientes</h2>
            <div className={ slideActiv }>
                <img src={Ameii} alt='Ameii' className="Clients__Logo"/>
                <img src={ArcoIris} alt='Arco Íris Papelaria' className="Clients__Logo"/>
                <img src={BrasilBike} alt='Brasil Bike Shop' className="Clients__Logo"/>
                <img src={CasaGrande} alt='Casa Grande Macolassi' className="Clients__Logo"/>
                <img src={Cresol} alt='Cresol' className="Clients__Logo"/>
                <img src={Evo} alt='Evo Media' className="Clients__Logo"/>
                <img src={Hannas} alt='Hannas Estilo Natural' className="Clients__Logo"/>
                <img src={Volt} alt='Volt Baterias para Motos' className="Clients__Logo"/>
                <img src={BemViver} alt='Bem Viver Casa de Repouso' className="Clients__Logo"/>
                <img src={Meurer} alt='Meurer Odontologia Especializada' className="Clients__Logo"/>
                <img src={Realize} alt='Imobiliária Realize' className="Clients__Logo"/>
                <img src={Coser} alt='Coser Auto Serviço' className="Clients__Logo"/>
                <img src={Briancini} alt='Briancini Tintas' className="Clients__Logo"/>
                <img src={Pampa} alt='Pampa VW' className="Clients__Logo"/>
                <img src={PampaKia} alt='Pampa Kia' className="Clients__Logo"/>

            </div>
            <div className={ slideActiv == classSlider[0] ? classSlider[1] : classSlider[0] }>
                <img src={Flexmatic} alt='Flexmatic Energia Solar' className="Clients__Logo"/>
                <img src={AmandaFelippe} alt='Amanda Felippe' className="Clients__Logo"/>
                <img src={DraVeronicaRosseto} alt='Dra. Verônica Rosseto' className="Clients__Logo"/>
                <img src={Ivetu} alt='Ivetu Inspeção Veicular' className="Clients__Logo"/>
                <img src={Kichef} alt='Kichef Churrasco e Cozinha' className="Clients__Logo"/>
                <img src={Concept} alt='Concept Motors' className="Clients__Logo"/>
                <img src={LucyModas} alt='Lucy Modas' className="Clients__Logo"/>
                <img src={Pacheco} alt='Madeireira Pacheco' className="Clients__Logo"/>
                <img src={Molas} alt='Molas Cidade Azul' className="Clients__Logo"/>
                <img src={Cabeceira} alt='My. Cabeceira Modular' className="Clients__Logo"/>
                <img src={OralBrasil} alt='Oral Brasil' className="Clients__Logo"/>
                <img src={Tac} alt='Tac Telecom' className="Clients__Logo"/>
                <img src={Virtuosa} alt='Virtuosa Cliníca Estética' className="Clients__Logo"/>
                <img src={CoserPremium} alt='Coser Premium Cars' className="Clients__Logo"/>
                <img src={Sls} alt='SLS Electic Motors' className="Clients__Logo"/>

            </div>
            <div>
                <button className={ slideActiv ==  classSlider[0]  ? classSlider[3]  : classSlider[2] } onClick={slideOne}></button>
                <button className={ slideActiv ==  classSlider[0]  ? classSlider[2]  : classSlider[3] }  onClick={slideTwo}></button>
            </div>
            <div className="Clients__btn">
            <a href="https://wa.me/5554999009687" target='_blank'>Escalar meu Negócio</a>
            </div>
        </section>
    )
}

export default Clients