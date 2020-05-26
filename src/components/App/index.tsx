import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Header from '../Header';
import Footer from '../Footer';

import HomePage from '../../pages/HomePage';

const App = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.gridContainer}>
      <Grid container item xs={12} className={classes.gridHeader}>
        <Header />
      </Grid>
      <Grid container item xs={12} className={classes.gridBody}>
        <HomePage />
      </Grid>
      <Grid container item xs={12} className={classes.gridFooter}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      height: '100vh',
    },
    gridHeader: {
      height: '70px',
      border: '1px solid green',
      [theme.breakpoints.down('xs')]: {
        height: '70px',
      },
    },
    gridBody: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(200vh - 70px - 80px)',
      border: '1px solid blue',
      [theme.breakpoints.down('xs')]: {
        height: 'calc(100vh - 70px - 120px)',
      },
    },
    gridFooter: {
      height: '100px',
      border: '1px solid red',
      [theme.breakpoints.down('xs')]: {
        height: '120px',
      },
    },
  })
);
