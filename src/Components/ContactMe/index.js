import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledContactMe = styled.section`
    height: 300px;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    h3 {
        font-family: 'Ibarra Real Nova', serif;
        color: #33323D;
        font-weight: 700;
        font-size: 40px;
    }
    .grid-item-1 {
        display: flex;
        align-items: center;
        font-size: 40px;
        font-family: 'Ibarra Real Nova', serif;
        padding-right: 20px;
    }
    .grid-item-2 {
        .border {
            height: 150px;
            border-bottom: solid rgb(234, 234, 235) .5px;
        }
    }
    .grid-item-3 {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button {
            height: 48px;
            width: 162px;
            background: rgb(250, 250, 250);
            border: solid #33323D 1px;
            color: #33323D;
            font-size: 12px;
            letter-spacing: .5px;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
`

function ContactMe(){
    return(
        <>
        <StyledContactMe>
            <div className="grid-item-1">
                <h3>¿Tienes un proyecto en mente?</h3>
            </div>
            <div className="grid-item-2">
                <div></div>
                <div className="border"></div>
            </div>
            <div className="grid-item-3">
                <Link to={'/contact'}><button>Contáctame</button></Link>
            </div>
        </StyledContactMe>
        </>
    )
}

export default ContactMe