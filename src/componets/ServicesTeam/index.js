import React from 'react'
import Icon1 from '../../images/dsty.png'
import Icon2 from '../../images/col.png'
import Icon3 from '../../images/seh.png'
import Icon4 from '../../images/dao.png'
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
            <ServicesWrapper></ServicesWrapper>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>DstyHgts - Artist/Developer</ServicesH2>
                    <ServicesP>Started telling stories as an actor, then moved to directing and editing Music Videos and Films. Hoping to make them stick together on the dectralized Web. The stories/Movies, and maybe some acting. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Edg3s - Advisor/Developer</ServicesH2>
                    <ServicesP>A prominet web3 investor and artist, making his mark on generative art and DeFi.
                        He works for a big company that didn't even know how to use a computer before he showed up.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Strange Eventful History - Writers</ServicesH2>
                    <ServicesP>A New York Based collective of filmmakers, writers, actors, and performers - Strange Eventful History is a creative powerhouse of every facet of creative direction and production. From short films to musical albums and long-form plays - SEH will set the new standard for ARG expiriences and multi-media world building entertainment.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>BootDAO</ServicesH2>
                    <ServicesP>Early supporters of Dsty include @KnowMansLand, @cryptojuba, @edg3s, @charliemunn, @slothdeboss. All are integral memebrs to how this project got to where it is, though they may not realize it. In the next phase, Dsty hopes to bring them on in much more literal ways.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesTeam
