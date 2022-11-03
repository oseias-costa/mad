import React from 'react'
import './Footer.css'
import InstagramIcon from './icons/InstagramIcon';
import Logo from "./icons/Logo";
import WhatsIcon from './icons/WhatsIcon';

const Footer = () => {
    return(
        <footer className='Footer'>
            <div className='Footer__Item'>
                <Logo />
                <p>suporte@maddigital.com.br</p>
                <p>(54) 9 9900-9687</p>
                <p>(48) 9 9173-1687</p>
                <div>
                    <a href='https://www.instagram.com/maddigital__/' target='_blank'>
                        <InstagramIcon className='Footer__Item-social' />
                    </a>
                    <a href='https://wa.me/5554999009687' target='_blank'>
                        <WhatsIcon className='Footer__Item-social' />
                    </a>
                </div>
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