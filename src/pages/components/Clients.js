import React, { useState } from "react";
import './Clients.css'

const Clients = () => {
    const [slideActiv, setSlideActiv ] = useState('Clients__Slide-activ')   
    const slideOne = () => setSlideActiv('Clients__Slide-activ')
    const slideTwo = () => setSlideActiv('Clients__Slide-hidden')
    
    const classSlider = ['Clients__Slide-activ', 'Clients__Slide-hidden', 'Clients__Slide-btnActiv', 'Clients__Slide-btn' ]
    return(
        <section className="Clients"> 
            <h2>Alguns de Nossos Clientes</h2>
            <div className={ slideActiv }>
                Slide1
            </div>
            <div className={ slideActiv == classSlider[0] ? classSlider[1] : classSlider[0]  
            }>
                Slide2
            </div>
            <button className={ slideActiv ==  classSlider[0]  ? classSlider[2]  : classSlider[3] } onClick={slideOne}></button>
            <button className={ slideActiv ==  classSlider[0]  ? classSlider[3]  : classSlider[2] }  onClick={slideTwo}></button>
        </section>
    )
}

export default Clients