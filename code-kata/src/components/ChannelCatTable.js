import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function ChannelCatTable(props) {
  const { classes, channelCats } = props;

  if(channelCats){
    return (

      <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Ranking</TableCell>
            <TableCell>Angler</TableCell>
            <TableCell>Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {channelCats.map(cat => {
          return (
            <TableRow key={cat.ranking}>
              <TableCell>{cat.ranking + 1}</TableCell>
              <TableCell>{cat.angler}</TableCell>
              <TableCell>{cat.weight}</TableCell>
            </TableRow>
          );
        })}
        </TableBody>
        </Table>
      </Paper>

    );
  } else {
    return <div>loading... </div>
  }
}

ChannelCatTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChannelCatTable);
