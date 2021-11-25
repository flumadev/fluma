import React from 'react'
import { Container, HeaderContainer, ImageContainer, TextContainer } from './style'
import { AiOutlineArrowDown } from 'react-icons/ai'


const Landing = () => {
    return (
        <>
            <Container>
                <HeaderContainer>
                    <TextContainer>
                        <h1>Fluma</h1>
                        <p>Desenvolvimento de sistemas e aplicativos</p>
                    </TextContainer>
                    <ImageContainer>
                        <img src="/iphone-mac.png" alt="" />
                    </ImageContainer>
                </HeaderContainer>
            
            <a href="#services">
            <AiOutlineArrowDown fontSize="50px" color="#fff"/>
            </a>
              
            </Container>  
        </>
    )
}

export default Landing
