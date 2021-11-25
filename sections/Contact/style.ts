import styled from "styled-components";

export const ContactSection = styled.div`
    width: 100%;
    height: 90vh;

    background-color: #F2F2F2;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const ContactFormContainer = styled.div`
    width: 80%;
    height: 80%;

    background-color: #000;
    border-radius: 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TextContainer = styled.div`
    width: 40%;
    height: 80%;

    padding: 0 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    color: #fff;

`
export const TextTitle = styled.div`
        width: 100%;
    h1{
        font-size: 42px;
        line-height: 1.5;
    }

    p{
        font-size: 24px;

    }
`
export const ContactButtons = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    
   
`
export const ContactTileContainer = styled.a`
    width: 80%;
    height: 80px;
    padding: 15px;

    font-size: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-radius: 12px;

    &,a,svg{
    transition: all 0.2s;

    }

    &:hover{
        background-color: #fff;
        color: black;
    }

svg {
        margin-right: 15px;
    }

`
export const SocialIcons = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;

    font-size: 25px;

    padding: 0 15px;

    svg{
        margin-right: 25px;
    }
`
export const SocialTileContainer = styled.div`
width: initial
`
export const FormContainer = styled.div`
   width: 40%;
   height: 90%;

   margin: 0 auto;

   border-radius: 12px;

   background-color: tomato;

   display: flex;
   flex-direction: column;
   justify-content: center;
   input {
       height: 40px;
       border-radius: 6px;
       border: none;
   }

   textarea{
        border: none;
       border-radius: 6px;

   }

   label{
       margin-top: 20px;
   }

   input, textarea, label {
       width: 80%;

       margin: 0 auto;
   }
`