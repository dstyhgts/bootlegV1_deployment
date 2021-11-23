import React from 'react'
import {Button} from '../ButtonElement'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Video,
    BtnWrap,
    ImgWrap,
} from './InfoElements'

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel,
    video,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
           <InfoContainer id={id} lightBg={lightBg}>
               <InfoWrapper >
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                       <TextWrapper>
                           <TopLine>{topLine}</TopLine>
                           <Heading lightText={lightText}>{headline}</
                           Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                           <BtnWrap>
                               <Button to='home'
                               smooth={TextTrackCue}
                               duration={500}
                               spy={true}
                               exact="true"
                               offset={-80}
                               primary={primary ? 1 : 0}
                               dark={dark ? 1 : 0}
                               dark2={dark2 ? 1 : 0}
                               >{buttonLabel}</Button>
                           </BtnWrap>
                       </TextWrapper>
                       </Column1>
                       <Column2>
                        <ImgWrap>
                            <Video autoPlay loop muted src={video} alt={alt}/>
                        </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
           </InfoContainer>
        </>
    )
}

export default InfoSection
