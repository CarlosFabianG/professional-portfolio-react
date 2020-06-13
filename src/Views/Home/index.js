import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import heroImage from './image-homepage-hero.jpg'
import heroImageTablet from './Tablet/image-homepage-hero.jpg'
import imageProfile from './carlos-fabian-profile.JPG'
import ContactMe from '../../Components/ContactMe'

const StyledHeader = styled.header`
    min-height: 600px;
    min-width: 550px;
    background-image: url(${heroImage});
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: flex-end;
    .hero-text {
        height: 317px;
        width: 445px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 40px;
       
        div {
            width: 390px;
            height: 200px;
            display: flex;
            align-items: center;
        }
        h3 {
            margin: 0;
            font-size: 45px;
            font-family: 'Ibarra Real Nova', serif;
            line-height: 1;
            color: #33323D;
            span {
                font-size: 55px;
            }
        }
    }
    button {
        height: 48px;
        width: 200px;
        background: rgb(32, 58, 76);
        color: white;
        font-size: 12px;
        letter-spacing: .5px;
        border: 0;
        font-family: 'Public Sans', sans-serif;
        cursor: pointer;
    }
    @media screen and (max-width: 1290px) and (min-width: 1025px){
        .hero-text {
            width: 390px;
            height: 220px;
            margin-bottom: 7vh;
        }
    }
    @media screen and (max-width: 768px){
        height: 600px;
        background-image: url(${heroImageTablet});
        .hero-text{
            width: 68vw;
            height: 278px;
            div {
                width: 458px;
            }
            h3 {
                font-size: 40px;
            }
        }      
}
`

const StyledAbout = styled.section`
    max-height: 600px;
    margin-top: 150px;
    display: flex;
    article {
        border-top: solid rgb(234, 234, 235) 1px;
        border-bottom: solid rgb(234, 234, 235) 1px;
        color: #33323D;
        width: 350px;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 8vw;
    }
    h2 {
        font-size: 40px;
        font-family: 'Ibarra Real Nova', serif;
        font-weight: bold;
        margin: 0;
    }
    div {
        line-height: 2;
        height: 360px;
        padding: 20px 2px 50px 2px;
    }
    img {
        height: 600px;
    }
    button {
        height: 48px;
        width: 200px;
        background: rgb(250, 250, 250);
        border: solid #33323D 1px;
        color: #33323D;
        font-size: 12px;
        letter-spacing: .5px;
        text-transform: uppercase;
        cursor: pointer;
    }

    @media screen and (max-width: 1290px) and (min-width: 1025px){
        margin-top: 120px;
    }
    @media screen and (max-width: 768px){
        img {
            width: 40vw;
        }
    }
`

function Home(){
    return(
        <>
        <StyledHeader>
            <div class="hero-text">
                <div>
                    <h3>Hola, soy Carlos Fabián, desarrollador <br/><span>WEB</span></h3>
                </div>
                <a href="#sobreMi"><button>SOBRE MÍ</button></a>
            </div>
        </StyledHeader>

        
        <StyledAbout>
            <img src={imageProfile} alt="hero-image"/>
            <article>
                <h2>Sobre mí</h2>
                <div> 
                Soy un front-end developer buscando una posición en un equipo épico en donde pueda escribir código de calidad. Me enfoco en HTML5 semántico, CSS con metodologías como BEM y pre procesadores como SASS. JavaScript con las más recientes implementaciones de EcmaScript. Mi framework favorito para desarrollo frontend es React pero puedo adaptarme a cualquier tecnología. Me gusta trabajar en equipos de alta desempeño. 
                </div>
                <Link to={'/projects'}><button>Mis proyectos</button></Link>
            </article>
            <a name="sobreMi"></a>
        </StyledAbout>
        < ContactMe />
        </>
    )
}


export default Home