import React from 'react'

import styled from 'styled-components'

const StyledPreviousNext = styled.section`
    display: flex;
    border-top: solid rgb(234, 234, 235) 1px;
    border-bottom: rgb(234, 234, 235) 1px;
    height: 132px;
    margin-top: 5vh;
    img {
        height: 16px;
    }
    p {
        font-family: 'Ibarra Real Nova', serif;
        font-size: 32px;
        margin: 0;
    }
    span {
        color: #33323D;
        opacity: 50%;
        font-size: 15px;
    }
    .left-button {
        display: flex;
        align-items: center;
        width: 555px;
        border-right: solid rgb(234, 234, 235) 1.5px;
        img {
            margin-right: 25px;
        }
    }
    .right-button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 555px;
        img {
            margin-left: 25px;
        }
        div {
            text-align: end;
        }
    }
`


function PreviousNext(){
    return(
        <StyledPreviousNext>
            <div className="left-button">
                <img src="images/icons/arrow-left.svg" />
                <div>
                    <p>Fylo</p>
                    <span>Previous Project</span>
                </div>
            </div>

            <div className="right-button">
                <div>
                    <p>Bookmark</p>
                    <span>Next Project</span>
                </div>
            <img src="images/icons/arrow-right.svg" />
            </div>
      </StyledPreviousNext>
    )
}

export default PreviousNext