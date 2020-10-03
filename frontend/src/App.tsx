import React from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main';

import './App.scss';

function App() {
    return (
        <div className="h-screen bg-gray-300">
            <Header />

            <div className="sidebar px-5 flex">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default App;
