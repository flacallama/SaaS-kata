import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCatfish } from '../actions/catfish-action';
import { getAnyCat } from '../reducers/catfish-reducer';
import ChannelCatTable from '../components/ChannelCatTable'

class Catfish extends Component {

  componentWillMount(){
    this.props.getCatfishAction()
  }


  render () {
    let { getChannelCats, getFlatheads, getBlueCats } = this.props

    if(this.props.getChannelCats.length > 0){
      return (
        <div>
          <ChannelCatTable channelCats={getChannelCats} title="Channel Cats"/>
          <ChannelCatTable channelCats={getFlatheads} title="Flatheads"/>
          <ChannelCatTable channelCats={getBlueCats} title="Blue Catfish"/>
        </div>
      )
    } else {
      return <div>loading... </div>
    }

  }
}

function mapStateToProps(state, props){
  return {
    getFlatheads: getAnyCat(state, "flathead"),
    getChannelCats: getAnyCat(state, "channel"),
    getBlueCats: getAnyCat(state, "blue")
  }
}

function matchDispatchToProps(dispatch){
  return {
    getCatfishAction: bindActionCreators(getCatfish, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Catfish);
