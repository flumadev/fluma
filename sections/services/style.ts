import styled from "styled-components";

export const ServiceContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column ;

    h1{

        text-transform: uppercase;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 59px;
        span{
            font-weight: normal;
        }
    }


`

export const CardsContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;


`

export const Card = styled.div`
        font-family: Montserrat;
        font-style: normal;

        width: 450px;
        height: 450px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        border-radius: 14px;

        padding: 20px;

        transition: all 0.6s;
        
        
        h1{
        text-transform: initial;
        font-weight: bold;
        font-size: 24px;
    }

    p{
        font-weight: 300; 
        font-size: 18px;
        text-align: center;
        max-width: 350px;
    }

    &:hover{
        background: linear-gradient(107.95deg, #8F67C2 33.25%, #DB00FF 71.63%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        color: #fff;
    }
`