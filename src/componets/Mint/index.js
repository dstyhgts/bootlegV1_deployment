import React, {useState} from 'react'
// import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
    MintContainer, 
    MintBg, 
    // MintVideoBg,
    MintHt,
    MintContent,
    MintH1,
    MintP,
    MintBtnWrapper,
} from './MintElements'

const MintSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <MintContainer id='mint'>
            <MintBg>
                {/* <MintVideoBg autoPlay loop muted src=
                {Video} type='video/mp4' /> */}
            </MintBg>
            <MintContent>
                <MintHt>Doorfinns (as seen on)</MintHt>
                <MintH1> Minting begins
                    11/18 @ 11pm UTC
                    </MintH1>
                <MintP>
                    5,555/5,555
    
                </MintP>
                <MintBtnWrapper>
                    <Button 
                        to='connect-wallet' 
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
                    Connect Wallet
                    </Button>
                </MintBtnWrapper>
            </MintContent>
        </MintContainer>
    );
};

export default MintSection
