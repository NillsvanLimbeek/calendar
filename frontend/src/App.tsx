import React from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Calendar } from './views/Calendar';

import './App.scss';

function App() {
    return (
        <div className="h-screen bg-gray-300 overflow-hidden">
            <Header />

            <div className="main px-5 flex">
                <Sidebar />
                <Calendar />
            </div>
        </div>
    );
}

export default App;
