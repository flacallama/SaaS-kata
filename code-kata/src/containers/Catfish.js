import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCatfish } from '../actions/getCatfish';
import { getChannelCats } from '../reducers/getCatfish';
import ChannelCatTable from '../components/ChannelCatTable'

class Catfish extends Component {

  componentWillMount(){
    this.props.getCatfishAction()
  }


  render () {
    let { getChannelCats } = this.props

    if(this.props.getChannelCats.length > 0){
      return (
        <div>
          <ChannelCatTable channelCats={getChannelCats}/>
        </div>
      )
    } else {
      return <div>loading... </div>
    }

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
