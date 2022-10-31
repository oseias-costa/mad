import React from 'react'
import './Footer.css'
import Logo from "./icons/Logo";

const Footer = () => {
    return(
        <footer className='Footer'>
            <div className='Footer__Item'>
                <Logo />
                <p>contato@madcompanie.com.br</p>
                <p>(54) 9 9900-9687</p>
            </div>
            <div className='Footer__Item-nav'>
                <a href='#'>Início</a>
                <a href='#HowWork'>Como Funciona</a>
                <a href='#OurServices'>Serviços</a>
                <a href='#Clients'>Clientes</a>
            </div>
            <div className='Footer__Item'>
                <div className='Footer__Item-adress'>
                    <p>Unidade 1</p>
                    <p>R. Gustavo Barroso, 195. Passo Fundo-RS</p>
                </div>
                <div className='Footer__Item-adress'>
                    <p>Unidade 2</p>
                    <p>Vila Moema. Turabarão-SC</p>
                </div>

                
            </div>
        </footer>
    )
}

export default Footer