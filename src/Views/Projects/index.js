import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import geekBlogImg from './preview-geek-blog.png'
import bestExchangeImg from './image-best-exchange1.png'
import landingMarsImg from './image-landing-mars.png'
import bestMovieImg from './image-best-movie.png'
import ContactMe from '../../Components/ContactMe'

const StyledMain = styled.main`
h3 {
    font-family: 'Ibarra Real Nova', serif;
    color: #33323D;
    font-weight: 700;
    font-size: 40px;
}
article {
    border-top: solid var(--light-grey) 1px;
    border-bottom: solid var(--light-grey) 1px;
    color: #33323D;
    height: 500px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 6vw;
}
button {
    width: 175px;
    height: 48px;
    background: rgb(250, 250, 250);
    border: solid #33323D 1px;
    color: #33323D;
    font-size: 12px;
    letter-spacing: .5px;
    text-transform: uppercase;
    cursor: pointer;
}
img {
    width: 45vw;
}
.text {
    height: 150px;
    margin-bottom: 30px;
    line-height: 2;
}
.section-portfolio-odd {
    display: flex;
    margin-top: 10vh;
    
    article {
        border-top: solid rgb(234, 234, 235) 1px;
        border-bottom: solid rgb(234, 234, 235) 1px;
        color: #33323D;
        height: 500px;
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 6vw;
    }
}

.section-portfolio-evenly {
    display: flex;
    justify-content: flex-end;
    margin-top: 10vh;
    article {
        border-top: solid rgb(234, 234, 235) 1px;
        border-bottom: solid rgb(234, 234, 235) 1px;
        color: #33323D;
        height: 500px;
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-right: 6vw;
    }
}
`

function Projects(){
    return(
        <StyledMain class="portfolio-layout">

            <section class="section-portfolio-odd">
                <img src={geekBlogImg} alt=""/>
                <article>
                    <h3>Geek Blog</h3>
                    <div class="text">
                        Blog estilo geek construido siguiendo metodología BEM. 
                        Se usa HTML5 semántico, CSS Grid, FlexBox y técnicas de responsive design para adaptar el diseño a diferentes dispositivos. 
                    </div>
                    <Link to={'/projects/sm-dashboard'}><button>Ver proyecto</button></Link>
                </article>
            </section>

            <section class="section-portfolio-evenly">
                <article>
                    <h3>Landing in Mars</h3>
                    <div class="text">
                        Videojuego tipo shooting en donde puse en práctica mis habilidades con JavaScript puro ECMAScript6+ y programación orientada a objetos POO.
                    </div>
                    <Link to={'/projects/landing-in-mars'}><button>Ver proyecto</button></Link>
                </article>
                <img src={landingMarsImg} alt="landing-mars"/>
            </section>

            <section class="section-portfolio-odd">
                <img src={bestExchangeImg} alt="best-exchange"/>
                <article>
                    <h3>Best Exchange</h3>
                    <div class="text">
                        SPA que muestra en tiempo real el valor en el mercado de diferentes criptomonedas. Esta construida con Vue JS, usa tailwind como libreria CSS y consume la API coincape. 
                    </div>
                    <Link to={'/projects/best-exchange'}><button>Ver proyecto</button></Link>
                </article>
            </section>

            <section class="section-portfolio-evenly">
                <article>
                    <h3>Best Movie</h3>
                    <div class="text">
                        SPA que muestra películas con su sinopsis, reviews, trailers, etc.
                        Esta construida con React, Chakra UI, y consume la API The Movie DB.
                    </div>
                    <Link to={'/projects/best-movie'}><button>Ver proyecto</button></Link>
                </article>
                <img src={bestMovieImg} alt="best-movie"/>
            </section>
            < ContactMe />
        </StyledMain>
    )
}

export default Projects 