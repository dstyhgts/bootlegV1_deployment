import React, {useState} from 'react'
import Navbar from '../componets/Navbar'
import ScrollToTop from '../componets/ScrollToTop.js'
import Sidebar from '../componets/Sidebar'
import MintSection from '../componets/Mint'

const MintPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} />
           <MintSection />
           
        </>
    )
}

export default MintPage
