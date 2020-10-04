import React from 'react';
import ReactDOM from 'react-dom';

import { DateProvider } from './lib/context/';

import App from './App';

import './tailwind.output.css';

ReactDOM.render(
    <React.StrictMode>
        <DateProvider>
            <App />
        </DateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
