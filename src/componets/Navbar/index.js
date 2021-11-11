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
    NavLinks,
    NavBtn,
    NavBtnLink
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
                <NavLogo to='/' onClick={toggleHome}>bootlegs</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                        <NavLinks 
                         to='doorfinns' 
                         smooth={TextTrackCue} 
                         duration={500} 
                         spy={true}
                         exact='true' 
                         offset={-80}
                        >
                             Doorfinns
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks 
                         to='roadmap'
                         smooth={TextTrackCue}
                         duration={500} 
                         spy={true}
                         exact='true' 
                         offset={-80}
                        >
                             Roadmap
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks 
                         to='about'
                         smooth={TextTrackCue}
                         duration={500} 
                         spy={true}
                         exact='true' 
                         offset={-80}
                        >
                             About
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks 
                         to='WTF'
                         smooth={TextTrackCue}
                         duration={500} 
                         spy={true}
                         exact='true' 
                         offset={-80}
                        >
                            WTF
                        </NavLinks>
                    </NavItem>
                     <NavItem>
                         <NavLinks href="//www.discord.gg/7D6cCPJvHj" target="_blank"
                            aria-label="Discord">
                                <FaDiscord />
                            </NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks href="//www.twitter.com/doorfinns" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </NavLinks>
                     </NavItem>
                 </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/mint'>Mint</NavBtnLink>
                    </NavBtn>
             </NavbarContainer>
         </Nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar;