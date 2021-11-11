import React, {useState} from 'react'
import { Data } from './Data';
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'


// export const AccordianContainer = styled.div`
//     background: #0c0c0c;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 30px;
//     height: 800px;
//     position: relative;
//     z-index: 1;

//     :before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: linear-gradient(
//             180deg, 
//             rgba(0,0,0,0.2) 0%, 
//             rgba(0,0,0,0.6) 100% 
//             ),
//             linear-gradient(180deg,rgba(0,0,0,0.2) 0%, transparent
//             100%);
//         z-index: 2;
//     };
// `;

// //wtf? section
// export const AccordianBg = styled.div`
//     position: absolute;
//     top: 5240px;
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


const AccordianSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background: #010606;
    z-index: 1;
    height: 1000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
`;

const Container = styled.div`
    position: absolute;
    top: 20%;
    bottom: 20%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0,3);
`

const Wrap = styled.div`
    background: #010606;
    max-width: 768px;
    color: #a74cff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    cursor: pointer;

    h1 {
        padding: 2rem;
        font-size: 2rem;
    }

    span {
        margin-right: 1.5rem;
    }
`

const Dropdown = styled.div`
    background: #a74cff;
    color: #fff;
    width: 100%;
    max-height: 150px;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;

    p {
        font-size: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
`

export const TopLine = styled.p`
    color: #fff;
    font-size: 120px;
    display: flex;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 50px;
    margin-bottom: 100vh;
    padding-bottom: 16px;
`

const Accordian = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            //if clicked, question is already active, then it closes
            return setClicked(null)
        }
        setClicked(index)
    }


    return (
    <IconContext.Provider value={{ color: '#fff', size: '35px' }}>
        {/* <AccordianBg>
                <VideoBg autoPlay loop muted src=
                {Video} type='video/mp4' />
        </AccordianBg> */}
        <AccordianSection>
        <TopLine>W.T.F?</TopLine>
            <Container>
                {Data.map((item, index) => {
                    return (
                        <>
                        <Wrap onClick={() => toggle(index)} key={index}> 
                            <h1>{item.question}</h1>
                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </Wrap>
                            {clicked === index ? (
                                <Dropdown>
                                <p>{item.answer}</p>
                                </Dropdown>
                            ) : null}
                        </>
                    )
                })}
            </Container>
        </AccordianSection>
    </IconContext.Provider>
    );
};

export default Accordian
