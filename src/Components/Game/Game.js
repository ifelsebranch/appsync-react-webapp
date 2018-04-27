import React, { Component } from 'react';

class Game extends Component {
    render() {
        let gameName = this.props.game && this.props.game.name;
        return (
            <div>Game: {gameName}</div>
        );
    }
}

export default Game;