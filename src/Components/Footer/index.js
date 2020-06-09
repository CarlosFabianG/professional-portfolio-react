import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import logo from './white-logo.svg'
import twitterIcon from './twitter.svg'
import githubIcon from './github.svg'
import linkedinIcon from "./linkedin.svg"


const StyledFooter = styled.footer`
background: rgb(51, 50, 61);
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
.logo-links {
    display: flex;
    margin-left: 10vw;
    padding-top: 15px;
    padding-right: 15px;
    align-items: center;
    img {
        color: white;
        padding-right: 40px;
    }
    a {
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
`

function Footer(){
return(
    <>
        <StyledFooter>
            <div className="logo-links">
                <img src={logo}/>
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">Contacto</a>
            </div>
            <div className="icons">
                <a href="https://github.com/CarlosFabianG">
                    <img src={githubIcon}/>
                </a>
                <a href="https://twitter/Cfabian_blog">
                    <img src={twitterIcon}/>
                </a>
                <a href="https://www.linkedin.com/in/carlosfabian/">
                    <img src={linkedinIcon}/>
                </a>
            </div>
        </StyledFooter>
    </>
)
}


export default Footer