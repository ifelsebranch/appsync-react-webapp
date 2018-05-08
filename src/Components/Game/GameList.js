import React, { Component } from 'react';

class GameList extends Component {

  componentDidMount = () => {
    this.props.subscribeCreateGame();
  }

  renderGame = game => {
    return (
      <div key={game.id}>{game.name}</div>
    );
  }

  render() {
    const { data } = this.props;
    let games = data.listGames && data.listGames.items;
    return (
      <div>
        <h3>GameList</h3>
        {[].concat(games || [])
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(this.renderGame)}
      </div>
    );
  }
}

export default GameList;