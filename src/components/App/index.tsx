import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Header from '../Header';
import Footer from '../Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      height: '100vh',
    },
    gridHeader: {
      height: '70px',
    },
    gridBody: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200vh',
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
    <Grid container spacing={0} className={classes.gridContainer}>
      <Grid item xs={12} className={classes.gridHeader}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.gridBody}>
        <div data-testid="App">CORPO DA PÁGINA</div>
      </Grid>
      <Grid item xs={12} className={classes.gridFooter}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
