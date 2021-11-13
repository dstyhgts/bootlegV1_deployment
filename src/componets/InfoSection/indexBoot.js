import React from 'react'
import {BootButton} from '../ButtonElement'

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
    BtnWrap,
    ImgWrap,
    Img,
} from './InfoElements'

const BootInfoSection = ({
    patternBg,
    lightBg, 
    yellowBg,
    yellowText,
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    onHover
}) => {
    return (
        <>
           <InfoContainer id={id} lightBg={lightBg} yellowBg={yellowBg} patternBg={patternBg}>
               <InfoWrapper >
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                       <TextWrapper>
                           <TopLine yellowText={yellowText}>{topLine}</TopLine>
                           <Heading lightText={lightText}>{headline}</
                           Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                           <BtnWrap>
                               <BootButton 
                               href="//opensea.io/collection/thebootlegs" 
                                target="_blank"
                                aria-label="Opensea"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                               primary={primary ? 1 : 0}
                               dark={dark ? 1 : 0}
                               dark2={dark2 ? 1 : 0}
                               >{buttonLabel}</BootButton>
                            </BtnWrap>
                       </TextWrapper>
                       </Column1>
                       <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
           </InfoContainer>
        </>
    )
}

export default BootInfoSection
