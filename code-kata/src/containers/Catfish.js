import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCatfish } from '../actions/getCatfish'
import { getChannelCats } from '../reducers/getCatfish'

class Catfish extends Component {
  constructor() {
    super();
    // this.getWeight = this.getWeight.bind(this)
  }

  componentWillMount(){
    this.props.getCatfishAction()
  }

  // getWeight(len, gir){
  //   console.log('getting weight in container');
  //   return Math.round(len * gir * (gir/800))
  // }

  render () {


    console.log('from reducer. getChannelCats', this.props.getChannelCats);


        return (
          <div>

            catfish
          </div>
        )

  }
}

function mapStateToProps(state, props){
  return {
    getCatfish: state.getCatfish,
    getChannelCats: getChannelCats(state)
  }
}

function matchDispatchToProps(dispatch){
  return {
    getCatfishAction: bindActionCreators(getCatfish, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Catfish);
