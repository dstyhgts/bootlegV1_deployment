import styled from  'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { Link as  LinkR } from 'react-router-dom';



export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1100px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,255) 100% 
            ),
            linear-gradient(180deg,rgba(0,0,0,0) 0%, transparent
            100%);
        z-index: 2;
    };
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgWrap = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex-direction: column;
    align-items: center;
`


export const HeroImg = styled.div`
    color: #00c1ff;
    font-size: 32px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    &.hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        color: #a74cff;
        cursor: pointer;
    }
`


export const HeroH1 = styled.div`
    color: #a74cff;
    font-size: 64px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 64px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    &.hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #00c1ff;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    };

    @media screen and (max-width: 480px) {
        font-size: 18px;
    };

    &.hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroButton = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#a74cff' : '#010606')
    };
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#fff' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#00c1ff': 
        '#01BF71')};
    }
`

export const ArrowForward =  styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 10px;
    font-size: 22px;
`;