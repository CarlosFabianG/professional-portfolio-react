import React from 'react'
import Form from '../../Components/Form'
import github from './github-2.svg'
import twitter from './twitter-2.svg'
import linkedin from './linkedin-2.svg'

import styled from 'styled-components'

const StyledContact1 = styled.section`
display: flex;
margin-top: 10vh;
padding-top: 7vh;
border-top: solid rgb(234, 234, 235) 1px;
color: #33323D;
.title {
    width: 350px;
    h3 {
        font-family: 'Ibarra Real Nova', serif;
        font-size: 40px;
        font-weight: 700;
        margin: 0;
    }
}
article {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 925px;
}
.text {
    width: 635px;
    height: 210px;
    line-height: 2;
    p {
        margin: 0;
        opacity: 80%;
    }
}
.icons {
    fill: #33323D;
    margin-top: 15px;
    img {
        margin-right: 10px;
    }
}
.form {
    display: flex;
    justify-content: flex-end;
    width: 925px;
}
`

const StyledContact2 = styled.section`
    margin-top: 8vh;
    display: flex;
    padding-top: 7vh;
    border-top: solid rgb(234, 234, 235) 1px;
    margin-bottom: 15vh;
    color: #33323D;
    .title {
        width: 350px;
        h3 {
            font-family: 'Ibarra Real Nova', serif;
            font-size: 40px;
            font-weight: 700;
            margin: 0;
        }
    }
    .form {
        display: flex;
        justify-content: flex-end;
        width: 925px;
    }
`

function Contact(){
    return(
        <>
        <StyledContact1>
            <div class="title">
                <h3>Get in Touch</h3>
            </div>
      
            <article>
                <div class="text">
                <p> Actualmente, 
                estoy buscando colaborar en un proyecto desafiante en una Start-up con una misión poderosa ó en alguna agencia de desarrollo. 
                Puedo trabajar de manera remota ó presencial, teniendo la disponibilidad para cambiar de residencia si el proyecto lo requiere. 
                Me apasiona descubrir y aprender nuevas tecnologías. Y, más importante colaborar con gente talentosa y apasionada.  
                Si te interesa colaborar en algún proyecto puedes ponerte en contacto conmigo en la siguiente forma.</p>
                <div class="icons">
                    <a href="https://github.com/CarlosFabianG">
                    <img src={github} />
                    </a>
                    <a href="https://twitter/Cfabian_blog">
                    <img src={twitter} />
                    </a>
                    <a href="https://www.linkedin.com/in/carlosfabian/">
                    <img src={linkedin} />
                    </a>
                </div>
                </div>
            </article>
    </StyledContact1>

    <StyledContact2>
      <div class="title">
        <h3>Contáctame</h3>
      </div>

      <div class="form">
       < Form />
      </div>
  
    </StyledContact2>
        </>
    )
}

export default Contact