import styled from 'styled-components';
import { Home2 } from '@styled-icons/remix-fill/Home2';
import { User } from '@styled-icons/fa-solid/User';
import { Cog } from '@styled-icons/fa-solid/Cog';
import { ProjectDiagram } from '@styled-icons/fa-solid/ProjectDiagram';
import { ContactMail } from '@styled-icons/material/ContactMail';
import { Github } from '@styled-icons/evaicons-solid/Github';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { DevTo } from '@styled-icons/boxicons-logos/DevTo';
import { AngleDoubleRight } from '@styled-icons/fa-solid/AngleDoubleRight';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: ${({ open }) => (!open ? '80px' : '250px')};
    height: 100vh;
    background-color: #0c0c14;
    transition: width 0.6s ease;
`;
export const SideNav = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    & span {
        display: ${({ open }) => (!open ? 'none' : 'inline')};
    }
`;
export const ItemSpan = styled.span`
    display: none;
    margin-left: 16px;
`;

export const Logo = styled.li`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    color: #eee;
    background: #141418;
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
    cursor: pointer;

    & svg {
        transform: ${({ open }) => (!open ? 'rotate(0deg)' : 'rotate(-180deg)')};
        transition: 0.6s;
    }
`;
export const ListItem = styled.li`
    width: 100%;
`;
export const ItemLink = styled.a`
    display: flex;
    align-items: center;
    height: 80px;
    color: #fff;
    text-decoration: none;
    transition: 0.6s;
    &:hover {
        color: #232313;
        background: #fff;
    }
    & svg {
        width: 24px;
        min-width: 24px;
        margin: 0 24px;
    }
`;

export const HomeIcon = styled(Home2)`
    color: #7d9096;
`;
export const UserIcon = styled(User)`
    color: #7d9096;
`;
export const CogIcon = styled(Cog)`
    color: #7d9096;
`;
export const ProjectIcon = styled(ProjectDiagram)`
    color: #7d9096;
`;
export const ContactIcon = styled(ContactMail)`
    color: #7d9096;
`;

export const BottomNav = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 5px;
    width: auto;
    transition: width 0.7s ease;
    display: flex;
    flex-direction: ${({ open }) => (!open ? 'column' : 'row')};
`;

export const SocialLink = styled.a`
    display: flex;
    height: 22px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const GithubIcon = styled(Github)`
    color: #7d9096;
`;
export const FacebookIcon = styled(FacebookSquare)`
    color: #7d9096;
`;

export const LinkedinIcon = styled(LinkedinSquare)`
    color: #7d9096;
`;
export const DevToIcon = styled(DevTo)`
    color: #7d9096;
`;
export const ArrowLeft = styled(AngleDoubleRight)`
    color: #7d9096;
`;
