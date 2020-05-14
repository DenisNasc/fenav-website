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
        <Typography component="div" className={classes.title}>
          Sites Relacionados
        </Typography>
        <Container className={classes.sitesRelacionados}>
          <Typography component="div" className={classes.textos}>
            <Link href="https://portal.ufpa.br/">Universidade Federal do Pará (UFPA)</Link>
          </Typography>
          <Typography component="div" className={classes.textos}>
            <Link href="http://www.itec.ufpa.br/">Instituto de Tecnologia da UFPA (ITEC)</Link>
          </Typography>
          <Typography component="div" className={classes.textos}>
            <Link href="https://www.ana.gov.br/">Agência Nacional de Águas (ANA)</Link>
          </Typography>
          <Typography component="div" className={classes.textos}>
            <Link href="http://portal.antaq.gov.br/">
              Agencia Nacional de Transporte Aquaviário (ANTAQ)
            </Link>
          </Typography>
          <Typography component="div" className={classes.textos}>
            <Link href="https://www.marinha.mil.br/">Marinha do Brasil</Link>
          </Typography>
          <Typography component="div" className={classes.textos}>
            <Link href="https://www.marinha.mil.br/cpaor/">
              Capitania dos Portos da Amazônia Oriental
            </Link>
          </Typography>
        </Container>
      </Container>

      <Divider orientation="vertical" flexItem variant="middle" />

      <Container className={classes.contatosFaculdadeContainer}>
        <Typography component="div" className={classes.title}>
          Contatos
        </Typography>
        <Container className={classes.contatosFaculdade}>
          <Typography component="div" className={classes.textos}>
            Secretaria de Graduação: (91)998247565 (Rubenson)
          </Typography>
          <Typography component="div" className={classes.textos}>
            Secretaria de Pós-Graduação: (91)998247565 (Nayrama)
          </Typography>
          <Typography className={classes.textos}>
            Centro Acadêmico: (91)998247565 (Isabelly)
          </Typography>
        </Container>
      </Container>

      <Divider orientation="vertical" flexItem variant="middle" />

      <Container className={classes.enderecoContainer}>
        <Typography className={classes.title}>Endereço</Typography>
        <Container className={classes.endereco}>
          <Typography className={classes.textos}>
            Condomínio Fernando Guilhon BL. 10B APTO. 304
          </Typography>
        </Container>
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
    title: {
      fontSize: '16px',
    },
    sitesRelacionados: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '50px',
      width: '100%',
      margin: '0px',
      padding: '0px',
    },
    sitesRelacionadosContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '800px',
      margin: '0px',
      padding: '0px',
    },

    contatosFaculdade: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '50px',
      width: '100%',
      margin: '0px',
      padding: '0px',
    },
    contatosFaculdadeContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '650px',
      margin: '0px',
      padding: '0px',
    },

    endereco: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '50px',
      width: '100%',
      margin: '0px',
      padding: '0px',
    },
    enderecoContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '300px',
      margin: '0px',
      padding: '0px',
    },
  })
);
