import React from 'react';
import {AppBar, Container, Typography, Link, Divider} from '@material-ui/core';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar
      color="secondary"
      elevation={0}
      component="footer"
      classes={{root: classes.footer}}
      position="relative"
    >
      <Container className={classes.sitesRelacionadosContainer}>
        <Typography classes={{root: classes.textos}}>
          Endereço UFPA, no 4 portão, depois da ponte, caminhar por uma estrada que aparentemente
          leva a lugar algum
        </Typography>
        <Typography classes={{root: classes.textos}}>
          Secretaria de graduação: (91)998247565 [Rubenson]
        </Typography>
        <Typography classes={{root: classes.textos}}>
          Secretaria de pós-graduação: (91)998247565 [Nayrama]
        </Typography>
        <Typography classes={{root: classes.textos}}>E-mail: dncnaval@gmail.com</Typography>
        <Typography classes={{root: classes.textos}}>Universidade Federal do Pará</Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      top: 'auto',
      bottom: 0,
      height: '100%',
      paddingLeft: '10px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderTop: '1px solid black',
    },
    textos: {
      fontSize: '12px',
    },
    sitesRelacionadosContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '800px',
      margin: '0px',
      padding: '0px',
    },
  })
);
