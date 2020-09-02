import React, { useState } from 'react';
import {
    HeaderWrapper,
    SideNav,
    Logo,
    ListItem,
    ItemLink,
    ItemSpan,
    HomeIcon,
    UserIcon,
    CogIcon,
    ProjectIcon,
    ContactIcon,
    BottomNav,
    SocialLink,
    GithubIcon,
    FacebookIcon,
    LinkedinIcon,
    DevToIcon,
    ArrowLeft,
} from './Header.styles.js';
const Header = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = e => {
        e.preventDefault();
        setOpen(!open);
    };
    return (
        <HeaderWrapper open={open}>
            <SideNav open={open}>
                <Logo onClick={e => handleMenu(e)} open={open}>
                    <ItemLink>
                        <ItemSpan>Corvus</ItemSpan>
                        <ArrowLeft />
                    </ItemLink>
                </Logo>
                <ListItem>
                    <ItemLink>
                        <HomeIcon />
                        <ItemSpan>Home</ItemSpan>
                    </ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink>
                        <UserIcon />
                        <ItemSpan>About</ItemSpan>
                    </ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink>
                        <CogIcon />
                        <ItemSpan>Skills</ItemSpan>
                    </ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink>
                        <ContactIcon />
                        <ItemSpan>Contact</ItemSpan>
                    </ItemLink>
                </ListItem>
            </SideNav>
            <BottomNav open={open}>
                <SocialLink>
                    <GithubIcon />
                </SocialLink>
                <SocialLink>
                    <FacebookIcon />
                </SocialLink>
                <SocialLink>
                    <LinkedinIcon />
                </SocialLink>
                <SocialLink>
                    <DevToIcon />
                </SocialLink>
            </BottomNav>
        </HeaderWrapper>
    );
};

export default Header;
