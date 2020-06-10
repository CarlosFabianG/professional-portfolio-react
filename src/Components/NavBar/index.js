import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
    margin: 30px 0;
    backgorund: rgb(250, 250, 250);
    display: flex;
    justify-content: space-between;
    img {
        height: 40px;
    }
    .menu {
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin-right: 3vw;
        li {
            margin-left: 2rem;
            font-size: 1rem;
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
            <img src={logo}/>
            <ul class="menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/projects'} >Portfolio</Link></li>
                <li><Link to={'/contact'} >Contacto</Link></li>
            </ul>
        </StyledNavBar>
        </>
    )
}


export default NavBar