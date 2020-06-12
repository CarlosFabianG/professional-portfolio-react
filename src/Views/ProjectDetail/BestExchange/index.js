import React from 'react'
import { Link } from 'react-router-dom'
import PreviousNext from '../../../Components/PreviousNext'
import styled from 'styled-components'

import hero from './best-exchange-hero.png'

const StyledDetailHero = styled.div`
    
    margin-bottom: 15vh;
    img {
        width: 80vw;
    }
    @media screen and (max-width: 768px){
        img {
            width: 92vw;
        }  
    }
`

const StyledMain = styled.main`
display: flex;
article {
    height: 460px;
    border-top: solid rgb(234, 234, 235) 1px;
    border-bottom: solid rgb(234, 234, 235) 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        font-family: 'Ibarra Real Nova', serif;
        font-size: 40px;
        margin-bottom: 5px;
        margin-top: 0;
        color: #33323D;
    }
    p {
        width: 347px;
        line-height: 2;
        font-size: 15px;
        opacity: 80%;
    }
    span {
        display: block;
        color: rgb(95, 180, 162);
        padding-bottom: 20px;
    }
    button {
        width: 178px;
        height: 48px;
        background: rgb(250, 250, 250);
        border: solid #33323D 1px;
        color: #33323D;
        font-size: 12px;
        letter-spacing: 1px;
        margin-top: 10px;
        text-transform: uppercase;
        cursor: pointer;
    }
}
.project-background {
    width: 635px;
    margin-left: 10vw;
    p {
        line-height: 2;
        opacity: 80%;
    }
    img {
        margin-bottom: 5vh;
    }
}
`


function ProjectDetail(){
    return(
        <>
        <StyledDetailHero>
            <img src={hero}/>
        </StyledDetailHero>
        <StyledMain>
            <article>
                <h2>Best Exchange</h2>
                <p>
                    El presente proyecto es una SPA construída con la ayuda del framework progresivo Vue. En la parte de IU me apoyé en Tawilwind css, y API Rest para el consumo de datos.
                </p>
                <span>Interaction Design / Front End Development</span>
                <span>Vue / Tailwind CSS / API Rest</span>
                <a href="https://best-exchange.netlify.app/" target="_blank">
                    <button>Visit Website</button>
                </a>
            </article>

            <section className="project-background">
                <h3>Project Background</h3>
                    <p>
                        Hice este proyecto con el objetivo de probar el framewrok Vue y conocer sus ventajas frente a otras opciones de desarrollo. La aplicación muestra los precios en tiempo real de las principales criptomonedas en el mercado. Me ayudé de la API coincap para el consumo de datos. Para gráficar el comportamiento de los precios en el tiempo use la librería Chart.js.
                        Me enfoque mucho en lograr una buena UI con la ayuda de loaders y botones interactivos. De igual manera probé un framework de CSS que esta en tendencia llamado Tailwind. La aplicacón es full responsive. 
                    </p>
                <h3>Static Previews</h3>
                <div className="static-previews-container">
                    <img src="images/detail/desktop/image-manage-preview-1.jpg" alt="static previews" />
                    <img src="images/detail/desktop/image-manage-preview-2.jpg" alt="static previews" />
                </div>
            </section>
        </StyledMain>
        < PreviousNext next="Best Movie" 
                       nextProject='/projects/best-movie'
                       previous="Landing in Mars"
                       previousProject="/projects/landing-in-mars"/>
        </>
    )
}

export default ProjectDetail