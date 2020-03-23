import React,{useState,useEffect,useCallback} from 'react'


import { Grid } from '@material-ui/core'

import { DndProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend'
import Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper'
import { connect } from "react-redux";
import {setPlayerPosition} from "../../../actions/actions";


import AvailablePlayers from '../../organisms/AvailablePlayers/AvailablePlayers';
import FootballField from '../../organisms/FootballField/FootballField';

const playersInit = [
    {id:1,image:'',name:'',type:'all'},
    {id:2,image:'',name:'',type:'all'},
    {id:3,image:'',name:'',type:'all'},
    {id:4,image:'',name:'',type:'all'},
    {id:5,image:'',name:'',type:'all'},
    {id:6,image:'',name:'',type:'all'},
    {id:7,image:'',name:'',type:'all'},
    {id:8,image:'',name:'',type:'all'},
    {id:9,image:'',name:'',type:'all'},
    {id:10,image:'',name:'',type:'all'},
    {id:11,image:'',name:'',type:'all'}
];

const players__API = [
    {id:1,image:'',name:'asd',type:'all'},
    {id:2,image:'',name:'qwe',type:'all'},
    {id:3,image:'',name:'czx',type:'all'},
    {id:4,image:'',name:'fgh',type:'all'},
    {id:5,image:'',name:'ytr',type:'all'},
    {id:6,image:'',name:'uty',type:'all'},
    {id:7,image:'',name:'iyu',type:'all'},
    {id:8,image:'',name:'hjg',type:'all'},
    {id:9,image:'',name:'ljj',type:'all'},
    {id:10,image:'',name:'lkñ',type:'all'},
    {id:11,image:'',name:'pñl',type:'all'}
];

const benchPlayers__API = [
    {id:1,image:'',name:'PEPE',type:'all'},
    {id:2,image:'',name:'PEPI',type:'all'},
    {id:3,image:'',name:'PEPO',type:'all'},
    {id:4,image:'',name:'PEPU',type:'all'},
    {id:5,image:'',name:'PEPR',type:'all'},
    {id:6,image:'',name:'PEPK',type:'all'},
    {id:7,image:'',name:'PEPEL',type:'all'},
    {id:8,image:'',name:'PEPES',type:'all'}
];

const benchPlayersInit = [
    {id:1,image:'',name:'',type:'all'},
    {id:2,image:'',name:'',type:'all'},
    {id:3,image:'',name:'',type:'all'},
    {id:4,image:'',name:'',type:'all'},
    {id:5,image:'',name:'',type:'all'},
    {id:6,image:'',name:'',type:'all'},
    {id:7,image:'',name:'',type:'all'},
    {id:8,image:'',name:'',type:'all'}
];

function ControlPanel({playerDropBox,setPlayerPosition}) {
    const [players,setPlayers] = useState(playersInit);
    const [benchPlayers,setBenchPlayers] = useState(benchPlayersInit);
    const isMobile = window.outerWidth <= 1204;
    const backend = isMobile ? TouchBackend : Backend;
    
    useEffect(()=>{
        setTimeout(()=>{
            setPlayers(players__API);
            setBenchPlayers(benchPlayers__API);
        },1000);
    },[])

    const [droppedBoxNames, setDroppedBoxNames] = useState([])

    function isDropped(boxName) {
      return droppedBoxNames.indexOf(boxName) > -1
    }

    const handleDrop = useCallback(
        (index, item)=>{
            const { name } = item
            setDroppedBoxNames(
                update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
            )
            item.index = index;
            setPlayerPosition(item);
        },
    [ playerDropBox,droppedBoxNames])

    return (
        <div>
            <Grid container justify="space-evenly">
                <DndProvider backend={backend}>
                    <FootballField playerDropBox={playerDropBox} handleDrop={handleDrop} isDropped={isDropped}/>
                    <AvailablePlayers droppedBoxNames={droppedBoxNames} players={players} benchPlayers={benchPlayers}/>
                </DndProvider>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {playerDropBox: state.players};
}
ControlPanel = connect(mapStateToProps,{setPlayerPosition})(ControlPanel)
export default ControlPanel;