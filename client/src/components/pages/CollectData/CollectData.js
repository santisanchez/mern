import React,{useState,useCallback} from 'react'
import update from 'immutability-helper'

import {Grid,Paper} from '@material-ui/core'

import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {setPlayersPositions} from "../../../actions/actions";

import FootballField from '../../organisms/FootballField/FootballField';

function CollectData({setPlayersPositions,playersPositions,playersInField}) {

    // const changePlayer = (newPlayer,index) =>{
    //     players.splice(selectedPlayer.index,1,newPlayer)
    //     benchPlayers.splice(index,1,selectedPlayer)
    //     setSelectedPlayer({});
    //     showBenchPlayers();
    // }

    const [droppedBoxNames, setDroppedBoxNames] = useState([])

    function isPlaying(playerName) {
        return droppedBoxNames.indexOf(playerName) > -1
      }

      const handleDrop = useCallback(
          (index, item)=>{
              const { name } = item
              setDroppedBoxNames(
                  update(playersInField, name ? { $push: [name] } : { $push: [] }),
              )
              item.index = index;
              console.log(index);
              setPlayersPositions(item);
          },
      [ setPlayersPositions,playersInField])

    return (
        <Grid container direction={"row"} >
            <Grid item xs={6}>
                <FootballField playersPositions={playersPositions} handleDrop={handleDrop} isPlaying={isPlaying}/>
            </Grid>
            <Grid item xs={2}>
                <Paper >
                    <Button>
                        Action
                    </Button>
                </Paper>
                <Paper >
                    <Button>
                        Action
                    </Button>
                </Paper>
                    <Paper >
                    <Button>
                        Action
                    </Button>
                </Paper>
                <Paper >
                    <Button>
                        Action
                    </Button>
                </Paper>
                <Paper >
                    <Button>
                        Action
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}


const mapStateToProps = (state) =>{
    return {playersPositions: state.playersPositions.playersPositions,
            playersInField: state.playersInField};
}

CollectData = connect(mapStateToProps,{setPlayersPositions})(CollectData)
export default CollectData;