import React, { Component } from "react";

import { connect } from "react-redux";



 class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>x: this is in home component{this.props.y}</h1>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.dec}>-</button>
     
      </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    y: state.x,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => {
      dispatch({ type: "INCREMENT" });
    },
    dec: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
}


export default connect(mapStateToProps,mapDispatchToProps) (Home);