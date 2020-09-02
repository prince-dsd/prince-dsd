import styled from 'styled-components';

export const HomeSection = styled.div`
    left: 250px;
    position: absolute;
    height: 100%;
    width: calc(100% - 250px);
    background: #10101a;
`;

export const TextZone = styled.div`
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    max-height: 90%;
`;

export const Greet = styled.h6`
    color: #fff;
    font-weight: 500;
    font-size: 25px;
`;
export const TextContent = styled.h1`
    color: #fff;
    font-size: 48px;
`;

export const Lead = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
`;
export const Desc = styled.p`
    font-size: 18px;
`;
export const ButtonBar = styled.div`
    padding-top: 15px;
`;
export const Download = styled.a`
    display: inline-block;
    background: #2fbf71;
    color: #fff;
    box-shadow: 4px 4px #fff;
    cursor: pointer;
    padding: 0 25px;
    line-height: 42px;
    position: relative;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    text-decoration: none;
    transition: ease all 0.4s;
    &:hover {
        background: #fff;
        box-shadow: 4px 4px #2fbf71;
        color: #2fbf71;
    }
`;
