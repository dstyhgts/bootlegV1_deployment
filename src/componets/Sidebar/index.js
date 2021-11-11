import React from 'react';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
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
                    <SidebarLink to='doorfinns' onClick={toggle}>Doorfinns</SidebarLink>
                    <SidebarLink to='roadmap' onClick={toggle}>Roadmap</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='WTF' onClick={toggle}>WTF</SidebarLink>
                    <SidebarLink to='discord' onClick={toggle}>Discord</SidebarLink>
                    <SidebarLink to='twitter' onClick={toggle}>Twitter</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/mint'>Mint</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar
