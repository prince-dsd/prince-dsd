import React from 'react';
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
} from './Header.styles.js';
const Header = () => {
    return (
        <HeaderWrapper>
            <SideNav>
                <Logo>
                    <ItemLink>
                        <ItemSpan>Corvus</ItemSpan>
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
            <BottomNav>
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
