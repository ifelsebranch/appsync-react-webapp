import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Components/Game/Game';
import getGameQuery from './Query/getGameQuery';
import { graphql, compose } from 'react-apollo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GameWithData />
      </div>
    );
  }
}

const GameWithData = compose(
  graphql(getGameQuery, {
    options: {
      variables: {id: '83648a91-8b36-4922-aeab-9361696de565'},
      fetchPolicy: 'cache-and-network',
    },
    props: (result) => ({
      game: result.data.getGame
    })
  })
)(Game);


export default App;
