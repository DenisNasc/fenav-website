import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

import {Box, Typography} from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;
  const classes = useStyles();

  return (
    <div
      className={classes.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.box}>{children}</Box>}
    </div>
  );
};

export default TabPanel;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabPanel: {
      height: '100%',
    },
    box: {
      height: '100%',
    },
  })
);
