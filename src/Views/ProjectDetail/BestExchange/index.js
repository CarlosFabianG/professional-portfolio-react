import React from 'react'
import PreviousNext from '../../../Components/PreviousNext'
import styled from 'styled-components'

import hero from './image-manage-hero.jpg'

const StyledDetailHero = styled.div`
    width: 1110px;
    margin-bottom: 15vh;
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
                <h2>Manage</h2>
                <p>
                    This project required me to build a fully responsive landing page to the designs 
                    provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
                    required interactivity, such as the testimonial slider.
                </p>
                <span>Interaction Design / Front End Development</span>
                <span>HTML / CSS / JS</span>
                <button>Visit Website</button>
            </article>

            <section className="project-background">
                <h3>Project Background</h3>
                    <p>
                        This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
                        enables you to practice building websites to a design and project brief. Each challenge 
                        includes mobile and desktop designs to show how the website should look at different 
                        screen sizes. Creating these projects has helped me refine my workflow and solve 
                        real-world coding problems. I’ve learned something new with each project, helping 
                        me to improve and adapt my style.
                    </p>
                <h3>Static Previews</h3>
                <div className="static-previews-container">
                    <img src="images/detail/desktop/image-manage-preview-1.jpg" alt="static previews" />
                    <img src="images/detail/desktop/image-manage-preview-2.jpg" alt="static previews" />
                </div>
            </section>

            < PreviousNext />
        </StyledMain>
        </>
    )
}

export default ProjectDetail