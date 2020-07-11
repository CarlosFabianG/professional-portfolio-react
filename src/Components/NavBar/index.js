import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import logo from './logo.svg'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
    margin: 0 0 30px 0;
    max-width: 1160px;
    padding-top: 30px;
    background: rgb(250, 250, 250);
    display: flex;
    justify-content: space-between;
    img {
        height: 25px;
    }
    .menu {
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin-right: 3vw;
        text-decoration: none;
        span, a {
            margin-left: 2rem;
            font-size: 1rem;
            color: #33323D;
            text-decoration: none;
            &:hover {
                color: rgb(95, 180, 162);
            }
        }
    }
`

function NavBar(){
    return(
        <>
        <StyledNavBar>
            <Link to={'/'}>
                <img src={logo} alt="logo"/>
            </Link>
            <div className="menu">
                <Link to={'/'}><span>Inicio</span></Link>
                <NavLink to={'/projects'}><span>Portafolio</span></NavLink>
                <NavLink to={'/contact'}><span>Contacto</span></NavLink>
            </div>
        </StyledNavBar>
        </>
    )
}


export default NavBar