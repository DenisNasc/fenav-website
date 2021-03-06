import React, {useState, useEffect} from 'react';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Card, CardContent, Tabs, Tab, Grid, Typography} from '@material-ui/core';

import TabPanel from './components/TabPanel';
import NewsCard from './components/NewsCard';

const newsStates = [
  {
    title: 'Noticia 1',
    imageURL: 'https://www.santaportal.com.br/sistema/Arquivos/Fotos/2020210295211g.jpg',
    description: 'Nova balsa é construida no estaleiro do Rio Maguari',
  },
  {
    title: 'Noticia 2',
    imageURL:
      'https://www.ship-technology.com/wp-content/uploads/sites/16/2020/01/b600257f2819a5b2_800x800ar.jpg',
    description: 'Novo propulsor é inventado!',
  },
  {
    title: 'Noticia 3',
    imageURL: 'https://cargapesada.com.br/wp-content/uploads/2017/04/4-2.jpg',
    description: 'Alunos ganham prêmio de ciência',
  },
  {
    title: 'Noticia 4',
    imageURL:
      'https://www.transportabrasil.com.br/wp-content/uploads/2017/05/porto-santos-movimento.jpg',
    description: 'O DUNA (Desafio Universitário de Nautdesign) será semana que vem',
  },
  {
    title: 'Noticia 5',
    imageURL:
      'https://canaldoensino.com.br/blog/wp-content/uploads/2018/03/como-conseguir-uma-bolsa-de-estudo-integral-numa-universidade-privada_Prancheta-1.jpg',
    description: 'As aulas começarão dia 27/06',
  },
  {
    title: 'Noticia 6',
    imageURL: 'https://m.migalhas.com.br/imagem/881996909B4BF7C633CD14D612D963A8F828_formatura.jpg',
    description: 'Parabéns ao novos formandos',
  },
  {title: 'Noticia 7', imageURL: '', description: 'UFPA divulga resultados do PS 2020'},
];

const Home = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const passNews = () => {
      return setInterval(() => {
        setValue(value => {
          if (value === 5) {
            return 0;
          }

          return ++value;
        });
      }, 5000);
    };

    const interval = passNews();

    return () => clearInterval(interval);
  }, []);

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
    <Grid container item spacing={0} className={classes.homepageGrid}>
      <Grid container item xs={6} className={classes.homepageGridLeft}>
        <aside className={classes.aside}>
          <div className={classes.titleSubtitle}>
            <Typography className={classes.title} variant="h4">
              Faculdade de Engenharia Naval
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
              Universidade Federal do Pará
            </Typography>
          </div>

          <section>
            <Typography className={classes.sectionParagraf} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga rem ipsam,
              exercitationem non, magni architecto voluptatibus omnis ratione quos aliquam
              consequuntur neque impedit, praesentium quod nam placeat dolor molestias? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Error fuga rem ipsam, exercitationem non,
              magni architecto voluptatibus omnis ratione quos aliquam consequuntur neque impedit,
              praesentium quod nam placeat dolor molestias?Lorem ipsum dolor sit amet consectetur
              dolor sit amet consectetur adipisicing elit. Error fuga rem ipsam, exercitationem non,
              magni architecto voluptatibus omnis ratione quos aliquam consequuntur neque impedit,
              praesentium quod nam placeat dolor molestias?Lorem ipsum dolor sit amet consectetur
            </Typography>
          </section>
          <div className={classes.fenavHomepage} />
          <section>
            <Typography className={classes.sectionParagraf} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga rem ipsam,
              exercitationem non, magni architecto voluptatibus omnis ratione quos aliquam
              consequuntur neque impedit, praesentium quod nam placeat dolor molestias?Lorem ipsum
            </Typography>
          </section>

          <Card className={classes.cardContacts}>
            <CardContent className={classes.cardContactsContent}>
              <Typography className={classes.contactsContent}>
                Secretaria de graduação: (91)998247565
              </Typography>
              <Typography className={classes.contactsContent}>
                Secretaria de pós-graduação: (91)998247565
              </Typography>
              <Typography className={classes.contactsContent}>
                Centro acadêmico: (91)998247565 | deni.12345@hotmail.com
              </Typography>
            </CardContent>
          </Card>
        </aside>
      </Grid>

      <Grid container item xs={6} className={classes.homepageGridRight}>
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
            {newsStates
              .filter((_, i) => i < 6)
              .map((e, i) => (
                <Tab key={e.title} label={e.title} {...a11yProps(i)} />
              ))}
          </Tabs>

          <div className={classes.newsContainer}>
            {newsStates
              .filter((_, i) => i < 6)
              .map((e, i) => (
                <TabPanel key={e.title} value={value} index={i}>
                  <NewsCard
                    alt={e.title}
                    title={e.title}
                    imageURL={e.imageURL}
                    shortDescription={e.description}
                  />
                </TabPanel>
              ))}
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
      height: 'calc(100vh - 70px)',
      width: '100vw',
      [theme.breakpoints.down(450)]: {
        flexWrap: 'nowrap',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    },
    homepageGridLeft: {
      display: 'flex',
      padding: '20px',
      paddingBottom: '0px',
      height: '100%',
      flexDirection: 'column',
      [theme.breakpoints.down(450)]: {
        maxWidth: '100vw',
        maxHeight: 'calc(100vh - 48px - 70px)',
        overflowY: 'scroll',
      },
    },

    homepageGridRight: {
      height: '100%',
      paddingTop: '20px',
      [theme.breakpoints.down(450)]: {
        maxWidth: '100vw',
        padding: '0px',
        borderTop: '1px solid black',
      },
    },
    aside: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    cardContacts: {
      width: '60%',
      minWidth: '370px',
      marginTop: '10px',
      marginBottom: '5px',
      backgroundColor: 'red',
      alignSelf: 'center',
    },
    cardContactsContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactsContent: {
      fontSize: '10pt',
      [theme.breakpoints.down(450)]: {
        fontSize: '8pt',
      },
    },
    titleSubtitle: {
      borderBottom: '1px solid black',
    },

    title: {
      [theme.breakpoints.down(450)]: {
        fontSize: '16pt',
      },
    },
    subtitle: {
      [theme.breakpoints.down(450)]: {
        fontSize: '14pt',
      },
    },
    sectionParagraf: {
      marginTop: '12px',
      textAlign: 'justify',
      // maxWidth: 'calc(100% - 40px)',
      [theme.breakpoints.down(450)]: {
        fontSize: '10pt',
      },
    },
    fenavHomepage: {
      height: '300px',
      backgroundImage: 'url(https://www.portal.ufpa.br/images/Portal_2019/Eng_Naval_1.jpg)',
    },
    tabsContainer: {
      width: '100%',
    },
    tabs: {
      height: '48px',
    },
    newsContainer: {},
  })
);
