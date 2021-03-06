import React from 'react'
import PreviousNext from '../../../Components/PreviousNext'
import styled from 'styled-components'
import ContactMe from '../../../Components/ContactMe'

import hero from './landing-in-mars-hero.png'

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
                <h2>Landing in Mars</h2>
                <p>
                    Este proyecto requirió un buen conocimiento de JavaScript puro - ECMAScript 6+ - y programación Orientada a Objetos para manipular el canvas, aplicar la lógica del juego y lograr la interactividad con el usuario. 
                </p>
                <span>Video Game / Front End Development</span>
                <span>HTML / CSS / JS</span>
                <a href="https://carlosfabiang.github.io/learning-in-mars/" target="_blank" rel="noopener noreferrer"><button>Visitar Website</button></a>
            </article>

            <section className="project-background">
                <h3>Project Background</h3>
                    <p>
                        Este fue mi primer proyecto completo dentro del bootcamp de IronHack. El objetivo fue poner en práctica mi conocimiento de JavaScript, sin ayuda de librerias, frameworks u otros elementos externos. El juego recrea un entrenamiento en Marte en el que el objetivo es disparar a drones que se acercan a ti. Es un juego simple con solo una instruccion: destruye los drones que puedas. Para hacerlo dispones de cuatro  movimientos que llevas a cabo con teclas del teclado. Tiene la opción de contar los puntos de un segundo jugador y por medio de una comparación declarar a un ganador. 
                    </p>
                
            </section>
        </StyledMain>
        < PreviousNext next="Best Exchange" 
                       nextProject="/projects/best-exchange" 
                       previous="Geek Blog"
                       previousProject="/projects/sm-dashboard"/>
        < ContactMe />
        </>
    )
}

export default ProjectDetail