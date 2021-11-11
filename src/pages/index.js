import React, {useState} from 'react';
import Sidebar from '../componets/Sidebar';
import Navbar from '../componets/Navbar';
import HeroSection from '../componets/HeroSection';
import InfoSection from '../componets/InfoSection';
import { HomeObjFive, HomeObjFour, HomeObjOne, HomeObjThree, HomeObjTwo } from '../componets/InfoSection/Data';
import ServicesTeam from '../componets/ServicesTeam';
import Services from '../componets/Services';
import Footer from '../componets/Footer';
import Accordian from '../componets/Accordian/Accordian';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} />
           <HeroSection />
           <InfoSection {...HomeObjOne} />
           <Services />
           <InfoSection {...HomeObjTwo} />
           <InfoSection {...HomeObjThree} />
           <InfoSection {...HomeObjFour} />
           <Accordian />
           <ServicesTeam />
           {/* <InfoSection {...HomeObjFive} /> */}
           <Footer />
        </>
    );
};

export default Home;
