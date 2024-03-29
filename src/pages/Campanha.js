import * as React from "react"
import { Link } from "gatsby"
import Header from "./components/Header"
import Topo from "./campanhas/Topo"
import './Campanha.css'
import Form from "./campanhas/Form"
import Clientes from "./campanhas/Clientes"

const NotFoundPage = () => {
  
  return (

    <main className='Corpo'>
      <Topo />
      <Form />
      <Clientes />
    </main>

  )
}

export default NotFoundPage

export const Head = () => <title>Página não encontrada</title>
