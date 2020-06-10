import React from 'react'

import styled from 'styled-components'


function Home(){
    return(
        <>
        <header class="hero-container">
            <div class="hero-text">
                <div>
                    <h3>Hey, I’m Carlos Fabián and I love building beautiful websites</h3>
                </div>
                <button>SOBRE MÍ</button>
            </div>
        </header>

        <section class="about-container">
            <img src="images/homepage/desktop/image-homepage-profile.jpg" />
            <article>
                <h2>Sobre mí</h2>
                <div> 
                    I’m a junior front-end developer looking for a new role in an exciting company. 
                    I focus on writing accessible HTML, using modern CSS practices and writing clean 
                    JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
                    whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
                    and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
                    I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
                    you to check out my work.
                </div>
                <button>Mis proyectos</button>
            </article>
        </section>
        </>
    )
}


export default Home