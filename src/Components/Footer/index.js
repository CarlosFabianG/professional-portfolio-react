import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import logo from './white-logo.svg'
import twitterIcon from './twitter.svg'
import githubIcon from './github.svg'
import linkedinIcon from "./linkedin.svg"


const StyledFooter = styled.footer`
background: rgb(51, 50, 61);
font-family: 'Public Sans', sans-serif;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
position: absolute;
flex-wrap: wrap;
.logo-links {
    display: flex;
    margin-left: 10vw;
    padding-top: 15px;
    padding-right: 15px;
    align-items: center;
    flex-wrap: wrap;
    img {
        color: white;
        padding-right: 40px;
        height: 20px;
    }
    span,a {
        color: white;
        font-size: 12px;
        margin-right: 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-decoration: none;
    }
}
.icons {
    color: white;
    margin-right: 120px;
    padding-top: 15px;
    a {
        margin-right: 25px;
    }
}
 @media screen and (max-width: 768px) {
     .icons {
        display: flex;
     }
 }
 @media screen and (max-width: 375px){
     height: 354px;
     flex-direction: column;
     .logo-links {
         padding-top: 50px;
         flex-direction: column;
         a {
            margin-bottom: 25px;
            img {
                margin-bottom: 10px;
                padding-right: 25px;
            }
         }
     }
     .icons {
        margin: 0;
        padding-bottom: 70px;
     }
 }
`

function Footer(){
return(
    <>
        <StyledFooter>
            <div className="logo-links">
                <NavLink to={'/'}><img src={logo} alt="logo"/></NavLink>
                <NavLink to={'/'}><span>Inicio</span></NavLink>
                <NavLink to={'/projects'}><span>Portafolio</span></NavLink>
                <NavLink to={'/contact'}><span>Contacto</span></NavLink>
            </div>
            <div className="icons">
                <a href="https://github.com/CarlosFabianG">
                    <img src={githubIcon} alt="github-icon"/>
                </a>
                <a href="https://twitter/Cfabian_blog" alt="twitter-icon">
                    <img src={twitterIcon} alt="twitter-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/carlosfabian/" alt="linkedin-icon">
                    <img src={linkedinIcon} alt="linkedin-icon"/>
                </a>
            </div>
        </StyledFooter>
    </>
)
}


export default Footer