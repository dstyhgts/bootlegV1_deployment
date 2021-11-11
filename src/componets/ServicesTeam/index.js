import React from 'react'
import Icon1 from '../../images/51.png'
import Icon2 from '../../images/49.png'
import Icon3 from '../../images/50.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const ServicesTeam = () => {
    return (
        <ServicesContainer id="ServicesTeam">
            <ServicesH1>Meet The "Team"</ServicesH1>
            <ServicesWrapper>Our Services</ServicesWrapper>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>DstyHgts - Artist</ServicesH2>
                    <ServicesP>Started telling stories as an actor, then moved to directing and editing Music Videos and Films. Hoping to make them stick together on the dectralized Web. The stories/Movies, and maybe some acting. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>DstyHgts - Developer</ServicesH2>
                    <ServicesP>Wrote final college paper on Bitcoin in 2017. Read the entire whitepaper. Didn't understand a thing at the time. Also, hi anon, you could easily find him online if you throw some vowels in.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>DstyHgts - "Real"</ServicesH2>
                    <ServicesP>Didn't think of creating made-up teammates before he started telling people he's made this all alone. Won't make up a team, I'll build one and you can watch. New Brushstrokes, Same Game.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesTeam
