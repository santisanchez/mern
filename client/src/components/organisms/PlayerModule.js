import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './PlayerModule.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 120,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function PlayerModule({player}) {
    const classes = useStyles();
    return (<Paper className={classes.paper}>
        <span>{player.name}</span>
      </Paper>
    );
}
