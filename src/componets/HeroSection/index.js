import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
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
                {Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>NEW! Doorfinns (As Seen On)
                    </HeroH1>
                <HeroP>
                    8,888 ways to get your Doorfinns' pumping, under 
                    the insatiable direction of Dsty Hgts. 
                    Minting only on Solana. 
                    Show Starts November 5th @11pm UTC
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='/mint' 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true}
                        exact='true' 
                        offset={-80}
                    >
                    Feeling Doorfinn? {!hover ? <ArrowForward /> : <ArrowRight
                    />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
