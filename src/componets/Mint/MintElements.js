

import styled from  'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const MintContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1300px;
    position: relative;
    z-index: 1;

    /* :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100% 
            ),
            linear-gradient(180deg,rgba(0,0,0,0.2) 0%, transparent
            100%);
        z-index: 2;
    }; */
`;

export const MintBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const MintVideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const MintContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MintHt = styled.div`
    color: #a74cff;
    font-size: 72px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 64px;
    }

    @media screen and (max-width: 480px) {
        font-size: 48px;
    }
`

export const MintH1 = styled.div`
    color: #00a1ff;
    font-size: 32px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const MintP = styled.p`
    margin-top: 24px;
    color: #00a1ff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    };

    @media screen and (max-width: 480px) {
        font-size: 18px;
    };
`;

export const MintBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MintArrowForward =  styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const MintArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 10px;
    font-size: 22px;
`;