import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa'
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
    FootSocialIconLink
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
                                <FooterLink to='/burnmechanicsBoot'>Burn Mechanics</FooterLink>
                                <FooterLink to='/burnmechanicsBoot'>Physical Design</FooterLink>
                                <FooterLink to='/burnmechanicsBoot'>What's Next?</FooterLink>
                                <FootSocialIconLink 
                                    href="//opensea.io/collection/thebootlegs" 
                                    target="_blank"
                                    aria-label="Opensea">Buy on Opensea</FootSocialIconLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Doorfinn (As Seen On TV)</FooterLinkTitle>
                            <FooterLink to='/Mint'>Mint</FooterLink>
                                <FooterLink to='/Rarities'>Rarities</FooterLink>
                            <FootSocialIconLink 
                                    href="//magiceden.io" 
                                    target="_blank"
                                    aria-label="Opensea">Magic Eden</FootSocialIconLink>
                                <FootSocialIconLink 
                                    href="//solanart.io" 
                                    target="_blank"
                                    aria-label="Opensea">Solanart</FootSocialIconLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    {/* <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect</FooterLinkTitle>
                                <FootSocialIconLink href="//www.twitter.com/doorfinns" target="_blank"
                            aria-label="Twitter">Twitter</FootSocialIconLink>
                                <FootSocialIconLink href="//www.discord.gg/7D6cCPJvHj" target="_blank"
                            aria-label="Discord">Discord</FootSocialIconLink>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Want to help?</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> */}
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
