import * as React from "react"
import { Link } from "gatsby"
import Header from "./components/Header"

const pageStyles = {
  color: "#404040",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const linkStyle = {
  color: '#0D436E',
  fontSize: '1.4em',
}

const NotFoundPage = () => {
  return (
    <>
    <Header />
    <main style={pageStyles}>
      <h1 style={headingStyles}>Página não encontrada</h1>
      <p style={paragraphStyles}>
        Desculpe 😔, não encontramos essa página.
        <br />
        <br />
        <Link to="/" style={linkStyle} >Página Inicial</Link>
      </p>
    </main>
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Página não encontrada</title>
