import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Header from '../Header';
import Footer from '../Footer';

import HomePage from '../../pages/HomePage';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid container item xs={12} className={classes.gridHeader}>
          <Header />
        </Grid>
        <Grid container item xs={12} className={classes.gridBody}>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Grid>
        {/* <Grid container item xs={12} className={classes.gridFooter}>
          <Footer />
        </Grid> */}
      </Grid>
    </BrowserRouter>
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
      border: '1px solid blue',
      height: 'calc(100vh - 70px)',
      [theme.breakpoints.down('xs')]: {},
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
