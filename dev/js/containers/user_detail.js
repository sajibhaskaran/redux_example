// libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {
    if(!this.props.user){
      return(<h4>Please select a user..</h4>)
    }
    return(
      <div>
      <h2>Name: {this.props.user.first} {this.props.user.last}</h2>
      <p> Age: {this.props.user.age}</p>
      <p> Description: {this.props.user.description}</p>
      </div>
    );

  }
}

function mapStateToProps(state){
  return {
    user: state.selectUser
  };

}

export default connect(mapStateToProps)(UserDetail);
