import React from "react"
import Header from "./components/Header"
import HowWork from "./components/HowWork"
import OurServices from "./components/OurServices"
import Start from "./components/Start"
import './index.css'


const IndexPage = () => {
  return (
    <main>
      <Header />
      <Start />
      <HowWork />
      <OurServices />
     
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
