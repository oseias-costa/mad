import React from "react";
import './Results.css'
import { ResultIcon } from "./utils/icons";
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Results = () => {
    const { resultPhoto } = useStaticQuery(graphql`
    query {
         resultPhoto: file(relativePath: { eq: "resultPhoto.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    return(
        <section className="Result">
            <ResultIcon className='Result__Wave' />
            <div className="Result__Block">
                <div className="Result__Description">
                    <h2>Aumente seus Resultados com quem é perito no assunto!</h2>
                    <p>Descrição</p>
                </div>
                <Img fixed={resultPhoto.GatsbyImageSharpFixed.fixed} alt='Resultado' />
            </div>

        </section>
        
    )
}

export default Results