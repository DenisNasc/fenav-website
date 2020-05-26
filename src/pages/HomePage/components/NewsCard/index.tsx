import React from 'react';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const NewsCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.newsCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src="/home/denis/Documentos/Developer/Projects/fenav-site/src/assets/img/teste.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    newsCard: {
      width: '100%',
      height: '100%',
      padding: '0px',
    },
    media: {
      height: '100%',
    },
  })
);
