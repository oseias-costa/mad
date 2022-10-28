import React from "react";
import './Results.css'
import { MoneyIcon, ResultIcon, UsersIcon } from "./utils/icons";
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import resultPhoto from '../../images/resultPhoto.png'

const Results = () => {
    // const { resultPhoto } = useStaticQuery(graphql`
    // query {
    //      resultPhoto: file(relativePath: { eq: "resultPhoto.png" }) {
    //       childImageSharp {
    //         fixed(width: 125, height: 125) {
    //           ...GatsbyImageSharpFixed
    //         }
    //       }
    //     }
    //   }
    // `)

    const data = useStaticQuery(graphql`
      query MyQuery {
        file(relativePath: {eq: "resultPhoto.png"}) {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
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
                    <UsersIcon />
                    <MoneyIcon />
                </div>
                {/* <Img fixed={resultPhoto.GatsbyImageSharpFixed.fixed} alt='Resultado' /> */}
                <div className="Result__Block-photo">
                <img src={resultPhoto} className='foto' />
                {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
                </div>
            </div>

        </section>
        
    )
}

export default Results