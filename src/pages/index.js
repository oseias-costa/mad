import React from "react"
import Clients from "./components/Clients"
import Header from "./components/Header"
import HowWork from "./components/HowWork"
import OurServices from "./components/OurServices"
import Results from "./components/Results"
import Start from "./components/Start"
import './index.css'


const IndexPage = () => {
  return (
    <main>
      <Header />
      <Start />
      <HowWork />
      <OurServices />
      <Results />
      <Clients />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
