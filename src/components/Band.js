import React, { Component } from 'react';
import {connect} from 'react-redux';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
<<<<<<< HEAD
        <span>{this.props.bands}</span>
=======
        <span>{this.props.band.name}</span>
>>>>>>> c8d6cda3ae563bb9a380561245251d0159f5b0c8
        <button onClick={() => this.props.delete(this.props.todo.id)}>DELETE</button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
<<<<<<< HEAD
  return {delete: band => dispatch({type: 'DELETE_BAND', payload: band})}
=======
  delete: band => dispatch({type: 'DELETE_BAND', payload: band})
>>>>>>> c8d6cda3ae563bb9a380561245251d0159f5b0c8
}

export default Band;
