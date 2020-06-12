import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
        <li>{this.props.name}</li>
        <button onClick={() => this.props.deleteBand(this.props.todo.id)}>DELETE</button>
      </div>
    );
  }
};


export default Band;
