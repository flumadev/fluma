import React from 'react'
import { HeaderContainer } from './style'

import { AiFillGithub } from 'react-icons/ai'



const PageHeader = () => {
    return (
        <HeaderContainer>
            <ul>
                <li className="contactLink"><a href="#contact">Contato</a></li>
                <li> <a href="https://github.com/flumadev" target="_blank" rel="noreferrer"><AiFillGithub fontSize={24}/> /flumadev</a></li>
            </ul>
        </HeaderContainer>
    )
}


export default PageHeader