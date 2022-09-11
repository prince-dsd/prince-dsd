import React, { useEffect } from 'react';
import ReactGA from "react-ga";

import Header from './components/Header/Header.component';
import Main from './components/Main/Main.component';
import SwitchMode from './components/SwitchMode/SwitchMode.component';

import './App.css';

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID)

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])

    return (
        <div className="App">
            <Header />
            <Main />
            <SwitchMode />
        </div>
    );
}

export default App;
