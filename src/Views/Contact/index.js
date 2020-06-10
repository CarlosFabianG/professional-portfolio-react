import React from 'react'
import Form from '../../Components/Form'
import github from './github-2.svg'
import twitter from './twitter-2.svg'
import linkedin from './linkedin-2.svg'

import styled from 'styled-components'

const StyledContact1 = styled.section`
display: flex;
margin-top: 10vh;
padding-top: 7vh;
border-top: solid rgb(234, 234, 235) 1px;
color: #33323D;
.title {
    width: 350px;
    h3 {
        font-family: 'Ibarra Real Nova', serif;
        font-size: 40px;
        font-weight: 700;
        margin: 0;
    }
}
article {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 925px;
}
.text {
    width: 635px;
    height: 210px;
    line-height: 2;
    p {
        margin: 0;
        opacity: 80%;
    }
}
.icons {
    fill: #33323D;
    margin-top: 15px;
    img {
        margin-right: 10px;
    }
}
.form {
    display: flex;
    justify-content: flex-end;
    width: 925px;
}
`

const StyledContact2 = styled.section`
    margin-top: 8vh;
    display: flex;
    padding-top: 7vh;
    border-top: solid rgb(234, 234, 235) 1px;
    margin-bottom: 15vh;
    color: #33323D;
    .title {
        width: 350px;
        h3 {
            font-family: 'Ibarra Real Nova', serif;
            font-size: 40px;
            font-weight: 700;
            margin: 0;
        }
    }
    .form {
        display: flex;
        justify-content: flex-end;
        width: 925px;
    }
`

function Contact(){
    return(
        <>
        <StyledContact1>
            <div class="title">
                <h3>Get in Touch</h3>
            </div>
      
            <article>
                <div class="text">
                <p>I’d love to hear about what you’re working on and how I could help. I’m currently 
                looking for a new role and am open to a wide range of opportunities. My preference 
                would be to find a position in a company in London. But I’m also happy to hear about 
                opportunites that don’t fit that description. I’m a hard-working and positive person 
                who will always approach each task with a sense of purpose and attention to detail. 
                Please do feel free to check out my online profiles below and get in touch using the form.</p>
                <div class="icons">
                    <a href="https://github.com/CarlosFabianG">
                    <img src={github} />
                    </a>
                    <a href="https://twitter/Cfabian_blog">
                    <img src={twitter} />
                    </a>
                    <a href="https://www.linkedin.com/in/carlosfabian/">
                    <img src={linkedin} />
                    </a>
                </div>
                </div>
            </article>
    </StyledContact1>

    <StyledContact2>
      <div class="title">
        <h3>Contact Me</h3>
      </div>

      <div class="form">
       < Form />
      </div>
  
    </StyledContact2>
        </>
    )
}

export default Contact