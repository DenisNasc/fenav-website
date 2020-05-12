import React, {useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {AppBar, Container, Tabs, Tab, Typography} from '@material-ui/core';

import {ReactComponent as Logo} from '../../assets/icons/FENAV.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '400px',
      padding: '0px',
      paddingLeft: '20px',
      margin: '0px',
    },
    title: {
      marginLeft: '60px',
    },
    logo: {
      paddingBottom: '5px',
      paddingLeft: '20px',
      width: '60px',
      height: '80px',
    },
    categoriesContainer: {
      height: '100%',
      display: 'flex',
      paddingRight: '20px',
      alignItems: 'center',
    },
    categorie: {
      padding: '0px',
      height: '80px',
      marginRight: '5px',
    },
  })
);

const Header = () => {
  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-ItemHeader-${index}`,
    };
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [value, setValue] = useState(0);
  const classes = useStyles();

  return (
    <AppBar data-testid="Header" className={classes.header} position="static">
      <Container classes={{root: classes.container}}>
        <Logo className={classes.logo} />
        <Typography classes={{root: classes.title}} data-testid="header-title">
          Faculdade de Engenharia Naval
        </Typography>
      </Container>
      <Tabs
        classes={{root: classes.categoriesContainer}}
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab
          data-testid="categorie-1"
          classes={{root: classes.categorie}}
          label="A Faculdade"
          {...a11yProps(0)}
        />
        <Tab
          data-testid="categorie-2"
          classes={{root: classes.categorie}}
          label="Como Ingressar"
          {...a11yProps(1)}
        />
        <Tab
          data-testid="categorie-3"
          classes={{root: classes.categorie}}
          label="Notícias"
          {...a11yProps(2)}
        />
        <Tab
          data-testid="categorie-4"
          classes={{root: classes.categorie}}
          label="Publicações"
          {...a11yProps(3)}
        />
        <Tab
          data-testid="categorie-5"
          classes={{root: classes.categorie}}
          label="Pós-Graduação"
          {...a11yProps(4)}
        />
        <Tab
          data-testid="categorie-6"
          classes={{root: classes.categorie}}
          label="Área do Aluno"
          {...a11yProps(5)}
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;
