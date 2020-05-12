import React,{useState} from 'react'

import {useSpring, animated} from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import {Grid ,Paper,Button} from '@material-ui/core'
import {Skeleton} from '@material-ui/lab';

import PlayerModule from '../../molecules/PlayerModule/PlayerModule'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 170,
      },
      paper: {
          height: 170,
          width: 120,
      },
      flipContainer:{
          position: "relative",
          willChange: 'transform,opacity'
      },
      button:{
          height: 120,
          width: '100%'
      }
});


export default function AvailablePlayers({players,benchPlayers}) {
    const classes = useStyles();
    const [selectedPlayer,setSelectedPlayer] = useState({});
    const [flipped, setFlipped] = useState(false)

    const selectPlayer = (player,index) => {setSelectedPlayer({...player,index})}
    const showBenchPlayers = ()=>{
        setFlipped(!flipped)
    }
    const { transform } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const changePlayer = (newPlayer,index) =>{
        players.splice(selectedPlayer.index,1,newPlayer)
        benchPlayers.splice(index,1,selectedPlayer)
        setSelectedPlayer({});
        showBenchPlayers();
    }
    return (
            <Grid item xs={6}>
                {/* Players */}
                {!flipped && <animated.div className={classes.flipContainer}  style={{ transform }}>
                    <Grid container>
                        {players.map((player,index) => (
                            player.name ? (<Grid item xs={3} key={player.id}>
                                <Paper className={classes.paper} onClick={()=>{selectPlayer(player,index)}}>
                                    <PlayerModule player={player} name={player.name} type={player.type} isDropped={false}/>
                                </Paper>
                            </Grid>) : (<Grid item xs={3} key={player.id}>
                                <Skeleton variant="rect" width={120} height={170}>
                                    <Paper className={classes.paper}></Paper>
                                </Skeleton>
                            </Grid>)
                        ))}
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Button onClick={showBenchPlayers} className={classes.paper} disabled={!selectedPlayer.name}>
                                    Change player
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                    </animated.div>}
                    {/* Bench Players */}
                {flipped && <animated.div className={classes.flipContainer} style={{ transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
                    <Grid container>
                        {benchPlayers.map((player,index) => (
                            <Grid item xs={3} key={player.id}>
                                <Paper onClick={()=>{changePlayer(player,index)}} >
                                    <PlayerModule player={player} name={player.name} type={player.type} isDropped={false}/>
                                </Paper>
                            </Grid>
                        ))}
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Button onClick={showBenchPlayers} className={classes.paper}>
                                    Change player
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </animated.div>}
            </Grid>
    )
}