import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

const players = [
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'},
    {image:'',name:'asd'}

]
export default function CollectData() {
    const classes = useStyles();

    return (
        <div>
        <Container className={classes.cardGrid} maxWidth="md" disableGutters>
          <Grid container spacing={4}>
            {players.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent> */}
                 
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    Heading
                </Typography>
                <Typography>
                    This is a media card. You can use this section to describe the content.
                </Typography>
                </CardContent>
            </Card>
          </Grid>
        </Container>
        </div>
    )
}
