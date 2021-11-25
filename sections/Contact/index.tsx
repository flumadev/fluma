import React from 'react'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import {FaPhone,FaEnvelope, FaGithub, FaInstagram} from 'react-icons/fa'
import { ContactButtons, ContactFormContainer, ContactSection, FormContainer, TextContainer, TextTitle, ContactTileContainer, SocialIcons } from './style'



const Contact = () => {
    return(
        <>
        <ContactSection>
            <ContactFormContainer>
                <TextContainer>
                    <TextTitle>
                        <h1>Vamos falar sobre seu projeto</h1>
                        <p>Envie uma mensagem e nosso time falará com você em breve</p>
                    </TextTitle>
                 
                        <ContactButtons>
                            <a href="tel:+5524993167352">
                                <FaPhone />
                                <h1 >+55 24 9 9316 7352</h1>
                            </a>

                            <a href="mailto:contato@fluma.dev">
                                <FaEnvelope />
                                <h1 >contato@fluma.dev</h1>
                            </a>
                        </ContactButtons>
                   
                    <SocialIcons>
                        
                    <a href="https://github.com/flumadev" target="_blank" rel="noreferrer"><AiFillGithub fontSize={32}/> </a>
                    <a href="#" target="_blank" rel="noreferrer"><AiFillInstagram fontSize={32}/> </a>

                      
                    </SocialIcons>
                </TextContainer>
                <FormContainer>
                   <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" />
                   </div>

                   <div>
                        <label htmlFor="email">Email</label>
                        <input type="mail" />
                    </div>

                    <div>
                        <label htmlFor="message" placeholder=''>Mensagem</label>
                        <textarea name="message" id="message" />
                    </div>
                </FormContainer>
            </ContactFormContainer>
        </ContactSection>
        </>
    )
}

export default Contact