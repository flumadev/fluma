import react from 'react'
import { Card, CardsContainer, ServiceContainer } from './style'

import { FiCloud, FiLayout, FiSmartphone } from 'react-icons/fi'
import Emoji from '../../components/Emoji'

const Services = () => {
    return(
        <>
        <ServiceContainer id="services">
            <h1><span>Como</span> funciona?</h1>
            <CardsContainer>
                <Card>
                    <FiSmartphone fontSize={100}/>
                    <h1>Escolha seu sistema</h1>
                    <p>Site? Desktop? App?
Desenvolvemos seu sistemas sob medida</p>
                </Card>

                <Card>
                    <FiLayout fontSize={100}/>
                    <h1>Desenvolvemos o design</h1>
                    <p>Mas se já tiver pronto tudo bem também <Emoji symbol="😉" label="blink"/></p>
                </Card>

                <Card>
                    <FiCloud fontSize={100}/>
                    <h1>Implementamos seu sistema</h1>
                    <p>Deixamos tudo pronto para o uso!
Também publicamos e hospedamos se preferir.</p>
                </Card>
            </CardsContainer>
        </ServiceContainer>
        </>
    )
}

export default Services