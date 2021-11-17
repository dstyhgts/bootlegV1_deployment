import React from 'react'
import Icon1 from '../../images/road123.png'
import Icon2 from '../../images/road4.png'
import Icon3 from '../../images/road56.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    // ServicesH2,
    // ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Roadfinn/Doormap</ServicesH1>
            <ServicesWrapper></ServicesWrapper>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    {/* <ServicesH2>November</ServicesH2>
                    <ServicesP>Meet The Doorfinns.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    {/* <ServicesH2>December</ServicesH2>
                    <ServicesP>Community Treasuries. Public wallets.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    {/* <ServicesH2>January</ServicesH2>
                    <ServicesP>Newfinns Eve Celebration!</ServicesP> */}
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
