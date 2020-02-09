import React,{useState} from 'react'
import {useSpring, animated as a} from 'react-spring'

import PlayerModule from '../../organisms/PlayerModule';

import {Grid, Card,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    paper: {
        height: 140,
        width: 120,
    },
    flipContainer:{
        position: "relative",
        willChange: 'transform,opacity'
    }
  });

const players__API = [
    {id:1,image:'',name:'asd'},
    {id:2,image:'',name:'qwe'},
    {id:3,image:'',name:'czx'},
    {id:4,image:'',name:'fgh'},
    {id:5,image:'',name:'ytr'},
    {id:6,image:'',name:'uty'},
    {id:7,image:'',name:'iyu'},
    {id:8,image:'',name:'hjg'},
    {id:9,image:'',name:'ljj'},
    {id:10,image:'',name:'lkñ'},
    {id:11,image:'',name:'pñl'}

]
const benchPlayers__API = [
    {id:1,image:'',name:'PEPE'},
    {id:2,image:'',name:'PEPI'},
    {id:3,image:'',name:'PEPO'},
    {id:4,image:'',name:'PEPU'},
    {id:5,image:'',name:'PEPR'},
    {id:6,image:'',name:'PEPK'},
    {id:7,image:'',name:'PEPEL'},
    {id:8,image:'',name:'PEPES'}
]
export default function CollectData() {
    const classes = useStyles();
    const [selectedPlayer,setSelectedPlayer] = useState({});
    const [players,setPlayers] = useState([{},{},{},{},{},{},{},{},{},{},{}]);
    const [benchPlayers,setBenchPlayers] = useState([{},{},{},{},{},{},{},{}])
    // const [changeSelectedPlayer,setChangeSelectedPlayer] = useState('');
    const [flipped, set] = useState(false)
    const { transform } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
      })

    const selectPlayer = (player,index) => {setSelectedPlayer({...player,index})}

    const showBenchPlayers = ()=>{
        set(state => !state)
        setPlayers(players__API);
        setBenchPlayers(benchPlayers__API);
    }

    const changePlayer = (newPlayer,index) =>{
        setPlayers(players.splice(selectedPlayer.index,1,newPlayer));
        setBenchPlayers(benchPlayers.splice(index,1,selectedPlayer));
        showBenchPlayers();
    }

    return (
        <Grid container direction={"row"} >
            <Grid item xs={6}>
            {/* Players */}
                {!flipped && <a.div className={classes.flipContainer}  style={{ transform }}>
                    <Grid container>
                        {players.map((player,index) => (

                            player.name ? (<Grid item xs={3}>
                                <Button onClick={()=>{selectPlayer(player,index)}} >
                                    <PlayerModule key={player.id} player={player}/>
                                </Button>
                            </Grid>) : (<Grid item xs={3}>
                                <Skeleton variant="rect" width={120} height={140}>
                                    <Paper className={classes.paper}></Paper>
                                </Skeleton>
                            </Grid>)
                        ))}
                        <Grid item xs={3}>
                            <Button onClick={showBenchPlayers} >
                                <Paper className={classes.paper}><span>Change player</span></Paper>
                            </Button>
                        </Grid>
                    </Grid>
            </a.div>}
            {/* Bench Players */}
                {flipped && <a.div className={classes.flipContainer} style={{ transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
            <Grid container>
                    {benchPlayers.map((player,index) => (
                        <Grid item xs={3}>
                            <Button onClick={()=>{changePlayer(player,index)}} >
                                <PlayerModule key={player.id} player={player}/>
                            </Button>
                        </Grid>
                    ))}
                    <Grid item xs={3}>
                        <Button onClick={showBenchPlayers} >
                            <Paper className={classes.paper}><span>Change player</span></Paper>
                    </Button>
                </Grid>
            </Grid>
        </a.div>}
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {selectedPlayer.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        
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
            </Grid>
            <Grid item xs={2}>
                <Button>
                    <Paper className={classes.paper}></Paper>
                </Button>
                <Button>
                    <Paper className={classes.paper}></Paper>
                </Button>
                <Button>
                    <Paper className={classes.paper}></Paper>
                </Button>
                <Button>
                    <Paper className={classes.paper}></Paper>
                </Button>
                <Button>
                    <Paper className={classes.paper}></Paper>
                </Button>
            </Grid>
        </Grid>
    )
}
