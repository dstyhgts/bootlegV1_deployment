import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute,
    BootSidebarRoute,
    SidebarSocialIconLink
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
                <BootSidebarRoute to='/bootlegs' onClick={toggle}>bootlegs</BootSidebarRoute>
                    <BootSidebarRoute to='/' onClick={toggle}>doorfinns</BootSidebarRoute>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/mint'>Mint</SidebarRoute>
                </SideBtnWrap>
                <SidebarSocialIconLink href="//www.discord.gg/7D6cCPJvHj" target="_blank"
                            aria-label="Discord">
                                <FaDiscord />

                                </SidebarSocialIconLink>
                    <SidebarSocialIconLink href="//www.twitter.com/doorfinns" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />

                                </SidebarSocialIconLink>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar
