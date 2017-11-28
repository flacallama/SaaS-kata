import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Catfish extends Component {
  constructor() {
    super();

  }


  // componentWillMount(){
  //   this.props.getCatfish()
  // }



  render () {

        return (
          <div>

            catfish
          </div>
        )

  }
}

// function mapStateToProps(state, props){
//   return {
//     getCatfish: state.getCatfish
//   }
// }
//
// function matchDispatchToProps(dispatch){
//   return {
//     getCatfishAction: bindActionCreators(getCatfish, dispatch),
//   }
// }

export default connect(null, null)(Catfish);
