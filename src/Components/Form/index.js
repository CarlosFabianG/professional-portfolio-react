import React from 'react'

import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 635px;
    label {
        color: #33323D;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .input-medium {
        height: 48px;
        background: rgb(234, 234, 235);
        border: 0;
        margin-bottom: 25px;
    }
    .input-large {
        height: 96px;
        background: rgb(234, 234, 235);
        border: 0;
        margin-bottom: 20px;
    }
    button {
        width: 200px;
        height: 48px;
        color: white;
        background: rgb(32, 58, 76);
        border: 0;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`

function Form(){
    return(
        <>
        <StyledForm>
          <label>Name</label>
          <input className="input-medium" placeholder="Jane Appleseed" />
  
          <label>Email Address</label>
          <input className="input-medium" placeholder="email@example.com" />
  
          <label>Message</label>
          <input className="input-large" placeholder="How can I help?" />
  
          <button>Send Message</button>
        </StyledForm>
        </>
    )
}

export default Form