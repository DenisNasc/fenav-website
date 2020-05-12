import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Header from '../Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      height: '100vh',
    },
    gridHeader: {
      height: '90px',
    },
    gridBody: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100% - 90px - 60px)',
      border: '1px solid black',
    },
    gridFooter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
      border: '1px solid red',
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={12} className={classes.gridHeader}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.gridBody}>
        <div data-testid="App">CORPO DA PÁGINA</div>
      </Grid>
      <Grid item xs={12} className={classes.gridFooter}>
        <div data-testid="App">FOOTER</div>
      </Grid>
    </Grid>
  );
};

export default App;
