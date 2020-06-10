import React from 'react'

import styled from 'styled-components'

const StyledMain = styled.main`
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
        div {
            height: 150px;
            margin-bottom: 30px;
            line-height: 2;
        }
    }
    h3 {
        font-family: 'Ibarra Real Nova', serif;
        color: #33323D;
        font-weight: 700;
        font-size: 40px;
    }
    button {
        width: 175px;
        height: 48px;
        background: rgb(250, 250, 250);
        border: solid #33323D 1px;
        color: #33323D;
        font-size: 12px;
        letter-spacing: .5px;
    }
}

.section-portfolio-evenly {
    display: flex;
    justify-content: flex-end;
    margin-top: 10vh;
    article {
        border-top: solid rgb(250, 250, 250) 1px;
        border-bottom: solid rgb(250, 250, 250); 1px;
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
        <main class="portfolio-layout">

            <section class="section-portfolio-odd">
                <img src="images/portfolio/desktop/image-portfolio-manage.jpg" />
                <article>
                    <h3>Manage</h3>
                    <div class="text">
                        This project required me to build a fully responsive landing page to the designs provided. 
                        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
                        such as the testimonial slider.
                    </div>
                    <button>Ver proyecto</button>
                </article>
            </section>

            <section class="section-portfolio-evenly">
                <article>
                    <h3>Bookmark</h3>
                    <div class="text">
                        This project required me to build a fully responsive landing page to the designs provided. I 
                        used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
                        as the features section.
                    </div>
                    <button>Ver proyecto</button>
                </article>

                <img src="images/portfolio/desktop/image-portfolio-bookmark.jpg" />
            </section>

            <section class="section-portfolio-odd">
                <img src="images/portfolio/desktop/image-portfolio-insure.jpg" />
                <article>
                    <h3>Manage</h3>
                    <div class="text">
                        This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
                        landing page. The only JavaScript this project required was to enable the toggling of the 
                        mobile navigation.
                    </div>
                    <button>Ver proyecto</button>
                </article>
            </section>

            <section class="section-portfolio-evenly">
                
                <article>
                    <h3>Fylo</h3>
                    <div class="text">
                    This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
                    built it so that it was fully-responsive. I took a mobile-first approach and used modern 
                    CSS like Flexbox and Grid for layout purposes.
                    </div>
                    <button>Ver proyecto</button>
                </article>
                <img src="images/portfolio/desktop/image-portfolio-fylo.jpg" />
            </section>

            <section class="section-interested">
                <div class="grid-item-1">
                    <h3>Interesado en hacer un proyecto?</h3>
                </div>
                <div class="grid-item-2"></div>
                <div class="grid-item-3">
                    <button>Contáctame</button>
                </div>
            </section>
        </main>
    )
}

export default Projects 