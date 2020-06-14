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
@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    .title {
        padding-bottom: 30px;
    }
    article {
        align-items: flex-start;
        width: 90vw;
    }
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
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
        padding-bottom: 15vh;
        .title {
            padding-bottom: 35px;
        }
        .form {
            justify-content: flex-start;
            width: 90vw;
        }
    }
`

function Contact(){
    return(
        <>
        <StyledContact1>
            <div class="title">
                <h3>¿Creamos algo juntos?</h3>
            </div>
      
            <article>
                <div class="text">
                <p> 
                Siempre estoy buscando conocer gente dentro de la comunidad Tech, asistir a eventos, conferencias, meetups y emprender nuevos retos.      
                En este momento estoy abierto a oportunidades profesionales en una start-up con una misión poderosa y/o en una agencia de desarrollo con personas talentosas y apasionadas.  
                Si tienes algún proyecto en mente, propuesta, invitación o colaboración envíame un mensaje para iniciar una conversación. Me encantará saber de ti.</p>
                <div class="icons">
                    <a href="https://github.com/CarlosFabianG">
                    <img src={github} alt="github-icon"/>
                    </a>
                    <a href="https://twitter/Cfabian_blog">
                    <img src={twitter} alt="twitter-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/carlosfabian/">
                    <img src={linkedin} alt="linkedin-icon"/>
                    </a>
                </div>
                </div>
            </article>
    </StyledContact1>

    <StyledContact2>
      <div class="title">
        <h3>Iniciemos una conversación</h3>
      </div>

      <div class="form">
       < Form />
      </div>
  
    </StyledContact2>
        </>
    )
}

export default Contact