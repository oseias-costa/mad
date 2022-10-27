import React from "react"
import Header from "./components/Header"
import Start from "./components/Start"
import './index.css'


const IndexPage = () => {
  return (
    <main>
      <Header />
      <Start />
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
