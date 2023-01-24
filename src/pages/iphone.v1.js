import * as React from "react"
import Topo from "./campanhas/Topo"
import './Campanha.css'
import Form from "./campanhas/Form"
import Clientes from "./campanhas/Clientes"

const NotFoundPage = () => {
  
  return (

    <main className='Corpo'>
      <Topo title='AUMENTE O VOLUME DE LEADS DA SUA LOJA DE IPHONE E DOBRE SEU FATURAMENTO' />
      <Form campanha='iphone' />
      <Clientes />
    </main>

  )
}

export default NotFoundPage

export const Head = () => <title>Mad Digital</title>
