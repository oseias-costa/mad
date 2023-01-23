import React from "react"
import Logo from "../components/icons/Logo"
import MoneyIcon from "../components/icons/MoneyIcon"
import UsersIcon from "../components/icons/UsersIcon"
import './Clientes.css'

const Clientes = () => {
    return(
        <section className="clientes">
           <h2>Aumente seus Resultados com quem é perito no assunto!</h2> 
           <div className="clientes_numeros">
           <div className="Result__Description-item">
                      <div className="Clientes__Description-itemIcon">
                        <UsersIcon />
                      </div>
                      <div className="Clientes__Description-itemText">
                        <h3>+ de 300</h3>
                        <p>Clientes Atendidos</p>
                      </div>
                    </div>
                    <div className="Result__Description-item">
                      <div className="Clientes__Description-itemIcon">
                        <MoneyIcon />
                      </div>
                      <div className="Clientes__Description-itemText">
                        <h3>+ de 2.5 milhões</h3>
                        <p>investidos em anúncios</p>
                      </div>
                    </div>
           </div>
        </section>
    )
}

export default Clientes