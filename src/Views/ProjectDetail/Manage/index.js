import React from 'react'
import PreviousNext from '../../../Components/PreviousNext'
import styled from 'styled-components'
import ContactMe from '../../../Components/ContactMe'

import hero from './image-manage-hero.jpg'

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
    a {
        width: 180px;
    }
}
.project-background {
    width: 635px;
    margin-left: 10vw;
    color: #33323D;
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
            <img src={hero}  alt=""/>
        </StyledDetailHero>
        <StyledMain>
            <article>
                <h2>Manage</h2>
                <p>
                    Este proyecto requirió un buen conocimiento de maquetación en HTML5, CSS, SASS y técnicas de responsive design.
                </p>
                <span>Landing page / Front End Development</span>
                <span>HTML / CSS / JS</span>
                <a href="https://manage-landing-page-cf.netlify.app" target="_blank" rel="noopener noreferrer"><button>Visitar Website</button></a>
            </article>

            <section className="project-background">
                <h3>Project Background</h3>
                    <p>
                        Manage es una landing page que hice usando HTML5, SASS y unas gotas de JavaScript. 
                        Durante el desarrollo se siguió la metodología BEM para nombrar selectores de CSS. Gracias a la ayuda del preprocesador de css SASS el código está modularizado por componente lo que facilita el mantenimiento y la escalabilidad. 
                        El diseño es responsive y se siguió el enfoque mobile first. 
                    </p>
                
            </section>
        </StyledMain>
        < PreviousNext next="Fylo" 
                       nextProject="/projects/fylo" 
                       previous="Best Movie"
                       previousProject="/projects/best-movie"/>
        < ContactMe />
        </>
    )
}

export default ProjectDetail