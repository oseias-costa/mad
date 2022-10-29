import React from "react";
import './Results.css'
import { MoneyIcon, ResultIcon, UsersIcon } from "./utils/icons";
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import resultPhoto from '../../images/resultPhoto.png'

const Results = () => {

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
                    <div className="Result__Description-item">
                      <div className="Result__Description-itemIcon">
                        <UsersIcon />
                      </div>
                      <div className="Result__Description-itemText">
                        <h3>+ de 150</h3>
                        <p>Clientes Atendidos</p>
                      </div>
                    </div>
                    <div className="Result__Description-item">
                      <div className="Result__Description-itemIcon">
                        <MoneyIcon />
                      </div>
                      <div className="Result__Description-itemText">
                        <h3>+ de 1.8 milhões</h3>
                        <p>investidos em anúncios</p>
                      </div>
                    </div>
                    
                </div>
                <div className="Result__Block-photo">
                <img src={resultPhoto} className='foto' />
                {/* { <Img fluid={data.file.childImageSharp.fluid} /> } */}
                </div>
            </div>

        </section>
        
    )
}

export default Results