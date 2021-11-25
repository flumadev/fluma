import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: #0a0a0a;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;


    color: #FFFFFF;

    ul {
        width: 60%;

        display: flex;
        justify-content: flex-end;

        li,a {
            display: flex;
            justify-content: center;
            align-items: center;
           
           

            svg {
                margin-right: 5px;

            }


        }
        

    }

    .contactLink{
        margin-right: 100px;

    }
    li{
        transition: all 0.2s ;
    }

    li:hover{
     
        background: linear-gradient(107.95deg, #8F67C2 33.25%, #DB00FF 71.63%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }

`