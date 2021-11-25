import React from 'react'
import {FaPhone,FaEnvelope, FaGithub, FaInstagram} from 'react-icons/fa'
import { ContactButtons, ContactFormContainer, ContactSection, FormContainer, TextContainer, TextTitle, Tile, ContactTileContainer, SocialIcons } from './style'



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
                        <ContactTileContainer href="tel:+5524993167352">
                            <FaPhone />
                            <a >+5524993167352</a>
                        </ContactTileContainer>
                        <ContactTileContainer href="mailto:contato@fluma.dev">
                            <FaEnvelope />
                            <a >contato@fluma.dev</a>
                        </ContactTileContainer>
                    </ContactButtons>
                    <SocialIcons>
                        <FaGithub />
                        <FaInstagram />
                    </SocialIcons>
                </TextContainer>
                <FormContainer>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" />

                    <label htmlFor="email">Email</label>
                    <input type="mail" />

                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </FormContainer>
            </ContactFormContainer>
        </ContactSection>
        </>
    )
}

export default Contact