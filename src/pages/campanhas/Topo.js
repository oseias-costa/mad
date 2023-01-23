import React from "react";
import resultimg from '../../images/resultimg.png'
import Logo from "../components/icons/Logo";
import './Topo.css'

const Topo = () => {
    return(
        <section className="Topo">
            <div className="Topo-chamada">
                <Logo />
                <h2>AUMENTE O VOLUME DE RESERVAS DA SUA POUSADA E PARE DE DEPENDER SOMENTE DOS APLICATIVOS.</h2>
                <p>Somos uma assessoria de marketing e geramos mais visibilidade, clientes e vendas para sua pousada.</p>
                <button>Agendar Sessão</button>
            </div>
            <div className="Topo-foto">
                <img src={resultimg} className='foto' alt="Mad Digital: Vicenzo Marroni e Mateus Madeira" />
            </div>
        </section>
    )
}

export default Topo