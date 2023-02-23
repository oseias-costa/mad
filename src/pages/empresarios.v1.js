import * as React from "react"
import Topo from "./campanhas/Topo"
import './Campanha.css'
import Form from "./campanhas/Form"
import Clientes from "./campanhas/Clientes"

const NotFoundPage = () => {
  
  return (

    <main className='Corpo'>
      <Topo title='DOBRE SUAS VENDAS E SEU FATURAMENTO COM ANÚNCIOS ON-LINE' />
      <Form campanha='empresario' />
      <Clientes />
    </main>

  )
}

export default NotFoundPage

export const Head = () => <title>Mad Digital</title>
