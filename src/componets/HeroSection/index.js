import React, {useState} from 'react'
import Video from '../../videos/SunRise.mp4'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroButton
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
                <HeroH1>NEW! "Doorfinns (As Seen On)" 
                    </HeroH1>
                <HeroP>
                    5,555 ways to get your Doorfinns' pumping, under 
                    the insatiable direction of Dsty Hgts. 
                    Minting only on Solana. 
                    Show Starts November 15th @11pm UTC
                </HeroP>
                <HeroBtnWrapper>
                    <HeroButton 
                        to="/mint"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                    Minting Soon {!hover ? <ArrowForward /> : <ArrowRight
                    />}
                    </HeroButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
