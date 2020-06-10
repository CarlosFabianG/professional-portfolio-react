import React from 'react'
import { NavLink } from 'react-router-dom'

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
                
            </ul>
        </StyledNavBar>
        </>
    )
}


export default NavBar