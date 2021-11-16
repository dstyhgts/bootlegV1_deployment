import React, {useState} from 'react'
import Video from '../../videos/SunRise.mp4'
import { BootButton } from '../ButtonElement'
import {
    HeroHt,
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'



const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src=
                {Video} type='SunRise/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroHt>NEW!</HeroHt>
                <HeroH1>Doorfinns (As Seen On)
                    </HeroH1>
                <HeroP>
                    5,555 ways to get your Doorfinns' pumping, under 
                    the insatiable direction of Dsty Hgts. 
                    Minting only on Solana. 
                    Show Starts November 15th @11pm UTC
                </HeroP>
                <HeroBtnWrapper>
                    <BootButton 
                        to="/mint"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                    Feeling Doorfinn? {!hover ? <ArrowForward /> : <ArrowRight
                    />}
                    </BootButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
