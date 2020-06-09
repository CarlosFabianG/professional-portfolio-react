import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'
import Footer from '../Footer'

const Wrapper = styled.div`
padding: 0 10vw;
`

function Layout(){
    return(
        <>
        <Wrapper>
            < NavBar />
        </Wrapper>
        <Footer />
        </>
    )
}

export default Layout