import React from 'react';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';

interface NewCardProps {
  imageURL: string;
  title: string;
  shortDescription: string;
  alt: string;
}

const NewsCard = (props: NewCardProps) => {
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
    </Card>
  );
};

export default NewsCard;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    newsCard: {
      borderRadius: '0px',
      boxShadow: 'none',
      height: 'calc(100vh - 70px - 20px - 48px)',
      width: '100%',
      padding: '0px',
      [theme.breakpoints.down(450)]: {
        height: '300px',
      },
    },
    media: {
      minHeight: '550px',
      height: '85%',
      [theme.breakpoints.down(450)]: {
        minHeight: '0px',
        height: '200px',
      },
    },
    content: {
      height: '15%',
      [theme.breakpoints.down(450)]: {
        height: '100px',
        borderBottom: '1px solid black',
      },
    },
    actionArea: {
      height: '100%',
    },
  })
);
