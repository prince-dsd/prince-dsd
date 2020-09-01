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
export const HeaderWrapper = styled.header`
    width: 80px;
    position: fixed;
    bottom: 0;
    top: 0;
    background: #0c0c14;
    transition: width 0.7s ease-out;

    &:hover {
        width: 250px;
    }
`;
export const SideNav = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
`;

export const Logo = styled.li`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #535354;
    background: #23232e;
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
    & a {
        margin-left: 16px;
    }
    &:hover {
        background: #141418;
        cursor: pointer;
    }
`;
export const ListItem = styled.li`
    width: auto;
    ${HeaderWrapper}:hover & {
        width: 100%;
    }
`;
export const ItemLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #ececec;
    height: 80px;
    font-weight: 400;
    & svg {
        margin: 0 48px;
    }
    &:hover {
        background: #141418;
        cursor: pointer;
    }
`;
export const ItemSpan = styled.span`
    display: none;
    transition: display 0.5s ease-out;
    ${HeaderWrapper}:hover & {
        display: block;
    }
`;
export const HomeIcon = styled(Home2)`
    height: 32px;
    color: #7d9096;
    ${ItemLink}:hover & {
        color: #09fdba;
    }
`;
export const UserIcon = styled(User)`
    height: 32px;
    color: #7d9096;
    ${ItemLink}:hover & {
        color: #09fdba;
    }
`;
export const CogIcon = styled(Cog)`
    height: 32px;
    color: #7d9096;
    ${ItemLink}:hover & {
        color: #09fdba;
    }
`;
export const ProjectIcon = styled(ProjectDiagram)`
    height: 32px;
    color: #7d9096;
    ${ItemLink}:hover & {
        color: #09fdba;
    }
`;
export const ContactIcon = styled(ContactMail)`
    height: 32px;
    color: #7d9096;
    ${ItemLink}:hover & {
        color: #09fdba;
    }
`;

export const BottomNav = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 5px;
`;

export const SocialLink = styled.a`
    display: inline-block;
    height: 32px;
    margin: 5px 15px;
`;

export const GithubIcon = styled(Github)`
    height: 32px;
    color: #7d9096;

    cursor: pointer;
`;
export const FacebookIcon = styled(FacebookSquare)`
    height: 32px;
    color: #7d9096;
    cursor: pointer;
`;

export const LinkedinIcon = styled(LinkedinSquare)`
    height: 32px;
    color: #7d9096;
    cursor: pointer;
`;
export const DevToIcon = styled(DevTo)`
    height: 32px;
    color: #7d9096;
    cursor: pointer;
`;
