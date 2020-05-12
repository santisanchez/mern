import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './PlayerModule.scss';

const useStyles = makeStyles({
  button: {
    height: 170,
    width: '100%',
  },
});

export default function PlayerModule({player}) {
    const classes = useStyles();
    return (<Button className={classes.button}>
        <span>{player.name}</span>
    </Button>
    );
}
