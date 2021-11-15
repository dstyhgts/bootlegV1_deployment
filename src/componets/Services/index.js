import React from 'react'
import Icon1 from '../../images/road012.png'
import Icon2 from '../../images/road3.png'
import Icon3 from '../../images/road45.png'
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
                    {/* <ServicesH2>PHASE ONE</ServicesH2>
                    <ServicesP>Meet The Doorfinns.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    {/* <ServicesH2>PHASE TWO</ServicesH2>
                    <ServicesP>Welcome to DoorfinnDAO.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    {/* <ServicesH2>PHASE THREE</ServicesH2>
                    <ServicesP>Newfinns Eve Celebration!</ServicesP> */}
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
