import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';

const client = new AWSAppSyncClient({
    url: "https://lvkmxkpqcng3tfgwit35om764u.appsync-api.eu-west-1.amazonaws.com/graphql",
    region: "eu-west-1",
    auth: {
        type: "API_KEY",
        apiKey: "da2-obeh2egwbrhpdg6wbd2ekqhb4u",
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Rehydrated>
            <App />
        </Rehydrated>
    </ApolloProvider>,document.getElementById('root'));
registerServiceWorker();
