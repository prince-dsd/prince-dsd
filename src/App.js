import React from 'react';
import Header from './components/Header/Header.component';
import Main from './components/Main/Main.component';
import SwitchMode from './components/SwitchMode/SwitchMode.component';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <SwitchMode />
        </div>
    );
}

export default App;
