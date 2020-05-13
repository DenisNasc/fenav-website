import React from 'react';
import {AppBar, Container, Typography, Link} from '@material-ui/core';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      top: 'auto',
      bottom: 0,
      height: '60px',
      paddingLeft: '10px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderTop: '1px solid black',
    },
    websitesContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '300px',
      margin: '0px',
    },
    secretariasContatosContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '500px',
      margin: '0px',
    },
    textos: {
      fontSize: '12px',
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar
      color="secondary"
      elevation={0}
      component="footer"
      classes={{root: classes.footer}}
      position="fixed"
    >
      <Container className={classes.websitesContainer}>
        <Typography component="div" className={classes.textos}>
          <Link href="https://portal.ufpa.br/">Site da Universidade Federal do Pará (UFPA)</Link>
        </Typography>
        <Typography component="div" className={classes.textos}>
          <Link href="www.itec.ufpa.br">Site do Instituto de Tecnologia da UFPA (ITEC)</Link>
        </Typography>
      </Container>

      <Container className={classes.secretariasContatosContainer}>
        <Typography component="div" className={classes.textos}>
          Contato da Secretaria de Graduação (Rubenson)
        </Typography>
        <Typography component="div" className={classes.textos}>
          Contato da Secretaria de Pós-Graduação (Rubenson)
        </Typography>
      </Container>
      <Typography className={classes.textos}>Endereço</Typography>
      <Typography className={classes.textos}>Centro Acadêmico</Typography>
    </AppBar>
  );
};

export default Footer;
