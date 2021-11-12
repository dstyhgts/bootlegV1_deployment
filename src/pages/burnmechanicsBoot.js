import React, {useState} from 'react'
import Navbar from '../componets/Navbar'
import ScrollToTop from '../componets/ScrollToTop.js'
import Sidebar from '../componets/Sidebar'
import BurnMechBootSection from '../componets/BurnMechanics'
import BootInfoSection from '../componets/InfoSection/indexBoot';
import { HomeObjFive, HomeObjSix, HomeObjSeven } from '../componets/InfoSection/Data';
import Footer from '../componets/Footer'


const BurnBootPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} />
           <BurnMechBootSection />
           <BootInfoSection {...HomeObjFive} />
           <BootInfoSection {...HomeObjSix} />
           <BootInfoSection {...HomeObjSeven} />
           <Footer />
           
        </>
    )
}

export default BurnBootPage
