import React, {useState, useEffect} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {AppBar, Container, Tabs, Tab, Typography} from '@material-ui/core';

import {ReactComponent as Logo} from '../../assets/icons/FENAV.svg';

const Header = () => {
  const [value, setValue] = useState<null | number>(null);
  const classes = useStyles();

  useEffect(() => {
    if (typeof value !== 'number') {
      document.title = 'FENAV – Faculdade de Engenharia Naval';
      return;
    }
    const pageTitles = [
      'A Faculdade',
      'Como Ingressar',
      'Notícias',
      'Publicações',
      'Pós-Graduação',
      'Área do Aluno',
    ];

    document.title = `${pageTitles[value]} – FENAV`;
  }, [value]);

  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-ItemHeader-${index}`,
    };
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar data-testid="Header" className={classes.header} position="fixed">
      <Container classes={{root: classes.container}}>
        <Logo className={classes.logo} />
        <Typography classes={{root: classes.title}} data-testid="header-title">
          Faculdade de Engenharia Naval
        </Typography>
      </Container>
      <Tabs
        classes={{root: classes.categoriesContainer}}
        value={value || 0}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab
          data-testid="categorie-1"
          classes={{root: classes.categorieButton}}
          label="A Faculdade"
          {...a11yProps(0)}
        />
        <Tab
          data-testid="categorie-2"
          classes={{root: classes.categorieButton}}
          label="Como Ingressar"
          {...a11yProps(1)}
        />
        <Tab
          data-testid="categorie-3"
          classes={{root: classes.categorieButton}}
          label="Notícias"
          {...a11yProps(2)}
        />
        <Tab
          data-testid="categorie-4"
          classes={{root: classes.categorieButton}}
          label="Publicações"
          {...a11yProps(3)}
        />
        <Tab
          data-testid="categorie-5"
          classes={{root: classes.categorieButton}}
          label="Pós-Graduação"
          {...a11yProps(4)}
        />
        <Tab
          data-testid="categorie-6"
          classes={{root: classes.categorieButton}}
          label="Área do Aluno"
          {...a11yProps(5)}
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px',
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
    categorieButton: {
      padding: '0px',
      height: '70px',
      marginRight: '5px',
    },
  })
);
