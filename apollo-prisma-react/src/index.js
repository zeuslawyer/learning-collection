import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';

// apollo imports
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// configure gql server url to connect the Apollo Client to
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

// create an apollo client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// wrap app in ApolloProvider HOC, pass in apollo client as prop

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
