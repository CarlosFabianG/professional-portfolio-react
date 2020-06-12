import React from 'react'
import PreviousNext from '../../../Components/PreviousNext'
import styled from 'styled-components'

import hero from './Home.png'

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
                <h2>Blog Geek</h2>
                <p>
                    Este blog requirió HTML semántico, CSS moderno con técnicas como FlexBox, Grid layout y siguiendo la metodología BEM para el nombramiento de clases-selectores y estructura general del contenido. La página es responsiva. 
                </p>  
                <span>Interaction Design / Front End Development</span>
                <span>HTML / CSS / JS</span>
                <a href="https://geek-blog.netlify.app"><button>Visit Website</button></a>
            </article>

            <section className="project-background">
                <h3>Project Background</h3>
                    <p>
                        Este proyecto es un blog con estilo geek. Cuenta con distintas páginas y secciones. 
                        El objetivo principal de este proyecto fue fortalecer mis habilidades en maquetación y construcción de sitios estáticos. Y, en específico poner en práctica mis conocimientos de CSS Grid Layout y de la metodología BEM. El diseño es responsivo haciendo uso de medidas relativas, FlexBox y media queries.
                    </p>
                <h3>Static Previews</h3>
                <div className="static-previews-container">
                    <img src="images/detail/desktop/image-manage-preview-1.jpg" alt="static previews" />
                    <img src="images/detail/desktop/image-manage-preview-2.jpg" alt="static previews" />
                </div>
            </section>
        </StyledMain>
        < PreviousNext next="Landing in Mars" nextProject="/projects/landing-in-mars"/>
        </>
    )
}

export default ProjectDetail