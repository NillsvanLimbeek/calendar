import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { DateProvider } from './lib/context/';

import App from './App';

import './tailwind.output.css';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <DateProvider>
                <App />
            </DateProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
