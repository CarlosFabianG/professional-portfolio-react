import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'
import Footer from '../Footer'

const Wrapper = styled.div`
padding: 0 10vw;
padding-bottom: 8vh;
background: rgb(250, 250, 250);
`

function Layout(props){
    return(
        <>
        <Wrapper>
            < NavBar />
            {props.children}
        </Wrapper>
        <Footer />
        </>
    )
}

export default Layout