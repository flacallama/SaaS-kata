import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCatfish } from '../actions/catfish-action';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';



const styles = theme => ({
    root: {
        width: '100%',
        margin: '0 auto',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        minWidth: 700,
        maxWidth: 1400
    },
    title: {
        textAlign: 'center',
        color: '#666'
    }
});


const createTable = (fish, title, classes) => {
  
  return (

    <Paper className={classes.root}>
      <Typography type="title">{title}</Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Ranking</TableCell>
            <TableCell>Angler</TableCell>
            <TableCell>Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fish.map((cat, i)=> {
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{cat.angler}</TableCell>
                <TableCell>{cat.weight}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}





class Catfish extends Component {

  componentWillMount(){
    this.props.getCatfishAction()
  }


  render () {
    let { flatHeads, channelCats, blueCats } = this.props.getCatfish;
    let { classes } = this.props;

      return (
        <div>
          {flatHeads ? createTable(flatHeads, "Flatheads", classes) : null}
          {channelCats ? createTable(channelCats, "Channel Cats", classes) : null}
          {blueCats ? createTable(blueCats, "Blue Catfish", classes) : null}
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

const mapping = connect(mapStateToProps, matchDispatchToProps)(Catfish)

export default withStyles(styles)(mapping);
