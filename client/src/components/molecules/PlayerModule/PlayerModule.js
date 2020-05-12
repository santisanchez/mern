import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './PlayerModule.scss';
import { useDrag } from 'react-dnd'

const useStyles = makeStyles({
  button: {
    height: 170,
    width: '100%',
  },
});

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export default function PlayerModule({player, name, type, isDropped }) {
    const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })
    const classes = useStyles();
    return (<Button ref={drag} style={{ ...style, opacity }} className={classes.button}>
        <span>{player.name}</span>
    </Button>
    );
}
