import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    // SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarSocialIconLink,
    LinkSidebarRoute
    } 
    from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <LinkSidebarRoute to='/'>(doorfinns)</LinkSidebarRoute>
                    <LinkSidebarRoute to='/bootlegs'>(bootlegs)</LinkSidebarRoute>
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

export default Sidebar
