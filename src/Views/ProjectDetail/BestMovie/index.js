import React from 'react'
import PreviousNext from '../../../Components/PreviousNext'
import styled from 'styled-components'
import ContactMe from '../../../Components/ContactMe'
import hero from './best-movie-hero.png'

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
color: #33323D;
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
    a {
        width: 180px;
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
            <img src={hero} alt=""/>
        </StyledDetailHero>
        <StyledMain>
            <article>
                <h2>Best Movie</h2>
                <p>
                    Este proyecto es una Single Page Application construida con React y consume la The Movie Data Base API para obtener los datos de miles de películas. Para los estilos se usa Chakra UI.
                </p>
                <span>Interaction Design / Front End Development</span>
                <span>React / Chakra UI / API Rest /</span>
                <a href="https://best-movie.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visitar Website</button></a>
            </article>

            <section className="project-background">
                <h3>Project Background</h3>
                    <p>
                        Best Movie app fue una de las primeras aplicaciones que contruí con React. Soy un apasionado del cine y quería hacer un proyecto relacionado a esta industria. La aplicación muestra películas por género, detalles como presupuesto, año de lanzamiento, rating, sinopsis, trailer y películas relacionadas que también te pueden interesar. 
                        Diseñar y construir esta aplicación me ayudó a lograr un entendimiento más profundo de React y sus Life Cycle Methods, React Router Dom, y, el consumo de datos de una API de terceros con REST.
                    </p>
                <h3>Static Previews</h3>
                <div className="static-previews-container">
                    <img src="images/detail/desktop/image-manage-preview-1.jpg" alt="static previews" />
                    <img src="images/detail/desktop/image-manage-preview-2.jpg" alt="static previews" />
                </div>
            </section>
        </StyledMain>
        < PreviousNext next="Blog Geek" 
                       nextProject={'/projects/sm-dashboard'}
                       previous="Best Exchange"
                       previousProject="/projects/landing-in-mars"/>
        < ContactMe />
        </>
    )
}

export default ProjectDetail