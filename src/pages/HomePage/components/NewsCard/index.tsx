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

interface INewCard {
  imageURL: string;
  title: string;
  shortDescription: string;
  alt: string;
}

const NewsCard = (props: INewCard) => {
  const {alt, imageURL, title, shortDescription} = props;
  const classes = useStyles();

  return (
    <Card className={classes.newsCard}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia className={classes.media} image={imageURL} title={alt} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          Compartilhar
        </Button>
        <Button size="small" color="primary">
          Leia mais
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
      height: '85%',
    },
    content: {
      height: '15%',
    },
    actionArea: {
      height: '90%',
    },
    actions: {
      height: '10%',
    },
  })
);
