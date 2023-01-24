import React from "react";
import resultimg from '../../images/resultimg.png'
import Logo from "../components/icons/Logo";
import './Topo.css'

const Topo = ({title}) => {
    return(
        <section className="Topo">
            <div className="Topo-chamada">
                <Logo />
                <h2>{title}</h2>
                <p>Somos uma assessoria de marketing e geramos mais visibilidade, clientes e vendas.</p>
                <a href='https://wa.me/5554999009687' target='_blank'>Quero escalar meu negócio</a>
            </div>
            <div className="Topo-foto">
                <img src={resultimg} className='foto' alt="Mad Digital: Vicenzo Marroni e Mateus Madeira" />
            </div>
        </section>
    )
}

export default Topo