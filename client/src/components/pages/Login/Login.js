import React from 'react'

import { Paper,Input,Button,Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: '360px',
        height: '250px',
      },
    },
    container:{
      height: 'fill-available'
    }
  }));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper variant="outlined">
              <Grid className={classes.container} container direction='column' justify='center' alignContent='center' spacing={4}>
                <Grid item>
                  <Input placeholder='Email'/>
                </Grid>
                <Grid item>
                  <Input placeholder='Password' type='password'/>
                </Grid>
                <Button>Login</Button>
              </Grid>
            </Paper>
        </div>
    )
}
