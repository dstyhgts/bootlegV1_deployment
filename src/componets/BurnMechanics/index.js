import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { DoorButton } from '../ButtonElement'
import {
    MintContainer, 
    MintBg, 
    MintVideoBg,
    MintContent,
    MintH1,
    MintP,
    MintBtnWrapper,
} from './BurnMechBootElements'

const BurnMechBootSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <MintContainer id='burnmechanicsBoot'>
            <MintBg>
                <MintVideoBg autoPlay loop muted src=
                {Video} type='video/mp4' />
            </MintBg>
            <MintContent>
                <MintH1> 300 Genesis-Tickets
                    </MintH1>
                <MintP>
                    To be split in up to 1500 Genesis pieces.
    
                </MintP>
                <MintBtnWrapper>
                    <DoorButton 
                        href="//opensea.io/collection/thebootlegs" 
                        target="_blank"
                        aria-label="Opensea"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                    Buy on Opensea
                    </DoorButton>
                </MintBtnWrapper>
            </MintContent>
        </MintContainer>
    );
};

export default BurnMechBootSection
