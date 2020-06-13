import React, { Component } from 'react'

import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 635px;
    font-family: 'Public Sans', sans-serif;
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
    p {
        color: rgb(95, 180, 162);
    }
`

class Form extends Component{

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }

    submitForm(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

    render(){
        const { status } = this.state;
        return(
            <>
        <StyledForm onSubmit={this.submitForm}
                    action="https://formspree.io/mgenynay"
                     method="POST">
          <label>Nombre</label>
          <input className="input-medium" placeholder="Elon Musk" />
  
          <label>Email</label>
          <input className="input-medium" placeholder="email@example.com" type="email" name="email" />
  
          <label>Mensaje</label>
          <input className="input-large" placeholder="¿Cómo te puedo ayudar?" type="text" name="message"/>
  
         
            {status === "SUCCESS" ? <p>¡Mensaje Enviado!</p> : <button>Envíar Mensaje</button>}
            {status === "ERROR" && <p>Ooops! Parece que hay un error.</p>}
        </StyledForm>
        </>
            )
    }
}

export default Form