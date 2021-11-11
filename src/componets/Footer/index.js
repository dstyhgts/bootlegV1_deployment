import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems,
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>"bootlegs"</FooterLinkTitle>
                                <FooterLink to='/'>Burn Mechanics</FooterLink>
                                <FooterLink to='/'>Physical Design</FooterLink>
                                <FooterLink to='/'>What's Next?</FooterLink>
                                <FooterLink to='/'>BootDAO</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Doorfinn (As Seen On TV)</FooterLinkTitle>
                                <FooterLink to='/'>Burn Mechanics</FooterLink>
                                <FooterLink to='/'>Physical Design</FooterLink>
                                <FooterLink to='/'>What's Next?</FooterLink>
                                <FooterLink to='/'>DoorfinnDAO</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect</FooterLinkTitle>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>Discord</FooterLink>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Want to help?</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/'
                            onClick={toggleHome}> bootlegs
                        </SocialLogo>
                        <WebsiteRights>Bootlegs © {new Date().getFullYear()}
                            All rights reserved.</WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href="//www.twitter.com/doorfinns" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="//www.discord.gg/7D6cCPJvHj" target="_blank"
                            aria-label="Discord">
                                <FaDiscord />
                        </SocialIconLink>
                        <SocialIconLink href="//www.youtube.com/channel/UCDVtm7Jnpsm4oPPkOxVIarg" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                        </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
