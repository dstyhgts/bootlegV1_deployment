import React, {useState, useEffect} from 'react';
import { FaBars, FaTwitter, FaDiscord } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    BootNavBtnLink,
    NavSocialIconLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav (false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
    <>
        <IconContext.Provider value={{ color: '#fff'}}>
         <Nav scrollNav={scrollNav}>
             <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>doorfinns  by  bootlegs</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                     <BootNavBtnLink to='/'>"doorfinns"</BootNavBtnLink>
                     </NavItem>
                    <NavItem>
                    <BootNavBtnLink to='/bootlegs'>"bootlegs"</BootNavBtnLink>
                     </NavItem>
                     <NavItem>
                         <NavSocialIconLink 
                            href="//www.discord.gg/7D6cCPJvHj" 
                            target="_blank"
                            aria-label="Discord">
                                <FaDiscord />
                            </NavSocialIconLink>
                     </NavItem>
                     <NavItem>
                         <NavSocialIconLink 
                            href="//www.twitter.com/doorfinns" 
                            target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </NavSocialIconLink>
                     </NavItem>
                 </NavMenu>
             </NavbarContainer>
         </Nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar;