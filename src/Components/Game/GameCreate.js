import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class GameCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleCreate = () => {
    this.props.onCreate({ 'name': this.state.name, 'id': uuidv4() });
  }

  render() {
    return (
      <div>
        <h3>GameCreate</h3>
        <input onChange={this.handleChange('name')} palceholder="Game name" />
        <button onClick={this.handleCreate}>Create</button>
      </div>
    );
  }
}

export default GameCreate;