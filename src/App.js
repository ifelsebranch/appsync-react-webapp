import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameCreate from './Components/Game/GameCreate'
import GameList from './Components/Game/GameList';
import gameMuCreate from './Query/gameMuCreate'
import gameQuList from './Query/gameQuList';
import OnCreateGameSubscription from './Query/gameSubOnCreate';
import { graphql, compose } from 'react-apollo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GameCreateWithData />
        <GameListWithData />
      </div>
    );
  }
}

const GameCreateWithData = compose(
  graphql(gameMuCreate, {
    props: (props) => ({
      onCreate: (game) => {
        props.mutate({
          variables: { ...game },
          optimisticResponse: () => ({ createGame: { ...game, __typename: 'Game' } })
        })
      }
    }),
    options: {
      refetchQueries: [{ query: gameQuList }],
      update: (dataProxy, { data: { createGame } }) => {
        const query = gameQuList;
        const data = dataProxy.readQuery({ query });
        data.listGames.items = data.listGames.items.concat(createGame);
        dataProxy.writeQuery({ query, data });
      }
    }
  })
)(GameCreate);

const GameListWithData = compose(
  graphql(gameQuList, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: (props) => ({
      data: props.data,
      subscribeCreateGame: param => {
        props.data.subscribeToMore({
          document: OnCreateGameSubscription,
          updateQuery: (prev, { subscriptionData: { data: { onCreateGame }}}) => ({
            ...prev, listGames: {
              ...prev.listGames,
              items: [onCreateGame, ...prev.listGames.items.filter(p => p.id !== onCreateGame.id)]
            }
          })
        })
      }
    })
  })
)(GameList);


export default App;
