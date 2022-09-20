import React, { useState } from 'react';
import { socialLinks } from '../../constants/social';
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
    ContactIcon,
    BottomNav,
    SocialLink,
    GithubIcon,
    FacebookIcon,
    LinkedinIcon,
    DevToIcon,
    ArrowLeft,
} from './Header.styles';

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
                <SocialLink href={socialLinks.github}>
                    <GithubIcon />
                </SocialLink>
                <SocialLink href={socialLinks.linkedin}>
                    <LinkedinIcon />
                </SocialLink>
                <SocialLink>
                    <FacebookIcon />
                </SocialLink>
                <SocialLink>
                    <DevToIcon />
                </SocialLink>
            </BottomNav>
        </HeaderWrapper>
    );
};

export default Header;
