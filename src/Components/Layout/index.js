import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
import NavBar from '../NavBar'
import Footer from '../Footer'

const Wrapper = styled.div`
padding: 0 10vw;
padding-bottom: 8vh;
background: rgb(250, 250, 250);
overflow: "auto"
`



export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Layout(props){
    return(
        <>
        <Wrapper>
            < ScrollToTop />
            < NavBar />
            {props.children}
        </Wrapper>
        <Footer />
        </>
    )
}

