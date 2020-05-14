import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {MoveToInbox, Mail} from '@material-ui/icons';

const DrawerNavigator = () => {
  const classes = useStyles();
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerNavigator;

const drawerWidth = '240px';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      height: 'calc(100vh - 70px - 80px)',
      top: '70px',
    },
  })
);
