import React, {useState} from 'react'
import MintNavbar from '../componets/MintNavbar'
import ScrollToTop from '../componets/ScrollToTop.js'
import MintSidebar from '../componets/MintSidebar'
import MintSection from '../componets/Mint'

const MintPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <MintSidebar isOpen={isOpen} toggle={toggle} />
           <MintNavbar toggle={toggle} />
           <MintSection />
           
        </>
    )
}

export default MintPage
