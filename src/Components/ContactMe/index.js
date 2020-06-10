import React from 'react'
import styled from 'styled-components'


const StyledContactMe = styled.section`
    height: 300px;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    .grid-item-1 {
        display: flex;
        align-items: center;
        font-size: 40px;
        font-family: 'Ibarra Real Nova', serif;
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
        }
    }
`

function ContactMe(){
    return(
        <>
        <StyledContactMe>
            <div className="grid-item-1">
                <h3>Interesado en hacer un proyecto?</h3>
            </div>
            <div className="grid-item-2"></div>
            <div className="grid-item-3">
                <button>Contáctame</button>
            </div>
        </StyledContactMe>
        </>
    )
}

export default ContactMe