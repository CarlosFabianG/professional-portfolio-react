import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'
import ContactMe from '../ContactMe'
import Footer from '../Footer'

const Wrapper = styled.div`
padding: 0 10vw;
background: rgb(250, 250, 250);
`

function Layout(){
    return(
        <>
        <Wrapper>
            < NavBar />
            < ContactMe />
        </Wrapper>
        <Footer />
        </>
    )
}

export default Layout