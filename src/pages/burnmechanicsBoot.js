import React, {useState} from 'react'
import BootNavbar from '../componets/BootNavbar'
import ScrollToTop from '../componets/ScrollToTop.js'
import BootSidebar from '../componets/BootSidebar'
import BurnMechBootSection from '../componets/BurnMechanics'
import BootInfoSection from '../componets/InfoSection/indexBoot';
import { HomeObjFive, HomeObjSix, HomeObjSeven, HomeObjEight } from '../componets/InfoSection/Data';
import Footer from '../componets/Footer'
import ServicesTeam from '../componets/ServicesTeam'
import AccordianBoot from '../componets/AccordianBoot/Accordian'


const BurnBootPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <BootSidebar isOpen={isOpen} toggle={toggle} />
           <BootNavbar toggle={toggle} />
           <BurnMechBootSection />
           <BootInfoSection {...HomeObjFive} />
           <BootInfoSection {...HomeObjSix} />
           <BootInfoSection {...HomeObjEight} />
           <AccordianBoot />
           <BootInfoSection {...HomeObjSeven} />
           <ServicesTeam />
           <Footer />
           
        </>
    )
}

export default BurnBootPage
