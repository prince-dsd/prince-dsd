import React from 'react';
import {
    HomeSection,
    TextZone,
    Greet,
    TextContent,
    Lead,
    Desc,
    ButtonBar,
    Download,
} from './Home.styles';
const Home = () => {
    return (
        <HomeSection>
            <TextZone>
                <Greet>Hello, I am </Greet>
                <TextContent>Prince Kumar </TextContent>
                <Lead>I Am Passionate Full-stack Developer</Lead>
                <Desc>
                    I design and develop services for customers of all sizes, specializing in
                    creating stylish, modern websites, web services and online stores.
                </Desc>
                <ButtonBar>
                    <Download>Download CV</Download>
                </ButtonBar>
            </TextZone>
        </HomeSection>
    );
};

export default Home;
