
import styled from 'styled-components'


//about "wen doorfinn"
// export const AccordianBg2 = styled.div`
//     position: absolute;
//     top: 3520px;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `;

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #232a34;
// `


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? 'Transparent' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1100px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 24 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;
`

export const TopLine = styled.p`
    color: ${({yellowText}) => (yellowText ? '#ffff00' : '#a74cff')};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#fff' : '#010606')
    };

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    color: ${({darkText}) => (darkText ? '#fff' : '#010606')};
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`