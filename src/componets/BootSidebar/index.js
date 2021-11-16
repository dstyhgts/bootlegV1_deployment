import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarSocialIconLink,
    LinkSidebarRoute
    } 
    from './SidebarElements'


const BootSidebar = ({ isOpen, toggle }) => {
    
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='bootlegs' onClick={toggle}>Bootlegs</SidebarLink>
                    <SidebarLink to='roadmap' onClick={toggle}>Roadmap</SidebarLink>
                    <SidebarLink to='burn mechanics' onClick={toggle}>Tear/Punch</SidebarLink>
                    <SidebarLink to='WTF' onClick={toggle}>WTF</SidebarLink>
                    <LinkSidebarRoute to='/'>(doorfinns)</LinkSidebarRoute>
                    <SidebarSocialIconLink href="//www.discord.gg/7D6cCPJvHj" target="_blank"
                            aria-label="Discord">
                                <FaDiscord />

                                </SidebarSocialIconLink>
                    <SidebarSocialIconLink href="//www.twitter.com/doorfinns" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />

                                </SidebarSocialIconLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/mint'>Mint</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default BootSidebar
