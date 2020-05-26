import React, {useState} from 'react';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Tabs, Tab, Grid, Typography} from '@material-ui/core';
import {Phone as PhoneIcon} from '@material-ui/icons';

import TabPanel from './components/TabPanel';
import NewsCard from './components/NewsCard';

const Home = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const a11yProps = (index: any) => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={0} className={classes.homepageGrid}>
      <Grid container item xs={6} className={classes.homepageGridLeft}>
        <section>
          <div className={classes.titleSubtitle}>
            <Typography variant="h4">Faculdade de Engenharia Naval</Typography>
            <Typography variant="h5">Universidade Federal do Pará</Typography>
          </div>

          <Typography className={classes.body} variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga rem ipsam,
            exercitationem non, magni architecto voluptatibus omnis ratione quos aliquam
            consequuntur neque impedit, praesentium quod nam placeat dolor molestias?
          </Typography>
        </section>
      </Grid>
      <Grid container item xs={6} className={classes.homepageGridRight}>
        <Typography className={classes.titleRight} variant="h5">
          Notícias
        </Typography>

        <div className={classes.tabsContainer}>
          <Tabs
            value={value}
            className={classes.tabs}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
            <Tab label="Item Two" icon={<PhoneIcon />} {...a11yProps(1)} />
            <Tab label="Item Three" icon={<PhoneIcon />} {...a11yProps(2)} />
            <Tab label="Item Four" icon={<PhoneIcon />} {...a11yProps(3)} />
            <Tab label="Item Five" icon={<PhoneIcon />} {...a11yProps(4)} />
            <Tab label="Item Six" icon={<PhoneIcon />} {...a11yProps(5)} />
          </Tabs>

          <div className={classes.newsContainer}>
            <TabPanel value={value} index={0}>
              <NewsCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Page Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              <NewsCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
              Page Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              <NewsCard />
            </TabPanel>
            <TabPanel value={value} index={5}>
              Page Six
            </TabPanel>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homepageGrid: {
      height: '4000px',
    },
    homepageGridLeft: {
      padding: '20px',
    },
    homepageGridRight: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '20px',
    },
    titleSubtitle: {
      borderBottom: '1px solid black',
    },
    body: {
      marginTop: '12px',
    },
    tabsContainer: {
      height: '70vh',
      width: '100%',
    },
    tabs: {
      marginBottom: '20px',
      backgroundColor: 'grey',
    },
    titleRight: {
      paddingTop: '42px',
    },
    newsContainer: {
      height: '100%',
    },
  })
);
