import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
        
        <span>{this.props.bands}</span>
        <span>{this.props.band.name}</span>
        <button onClick={() => this.props.delete(this.props.todo.id)}>DELETE</button>
      </div>
    );
  }
};


export default Band;
