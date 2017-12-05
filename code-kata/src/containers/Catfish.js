import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCatfish } from '../actions/catfish-action';
import ChannelCatTable from '../components/ChannelCatTable'

class Catfish extends Component {

  componentWillMount(){
    this.props.getCatfishAction()
  }


  render () {
    let { getCatfish } = this.props

      return (
        <div>
          <ChannelCatTable catfish={getCatfish.channelCats} title="Channel Cats"/>
          <ChannelCatTable catfish={getCatfish.flatHeads} title="Flatheads"/>
          <ChannelCatTable catfish={getCatfish.blueCats} title="Blue Catfish"/>
        </div>
      )
  }
}

function mapStateToProps(state, props){
  return {
    getCatfish: state.getCatfish
  }
}

function matchDispatchToProps(dispatch){
  return {
    getCatfishAction: bindActionCreators(getCatfish, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Catfish);
