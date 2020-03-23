import { SET_PLAYER } from '../actions/actionsTypes';
import update from 'immutability-helper'

const initialState = {
    players: [
        {id:1,item:'', lastDroppedItem: null ,classStyles: 'archer pin-1',accept:['all']},
        {id:2,item:'', lastDroppedItem: null ,classStyles: 'defences pin-1',accept:['all']},
        {id:3,item:'', lastDroppedItem: null ,classStyles: 'defences pin-2',accept:['all']},
        {id:4,item:'', lastDroppedItem: null ,classStyles: 'defences pin-3',accept:['all']},
        {id:5,item:'', lastDroppedItem: null ,classStyles: 'defences pin-4',accept:['all']},
        {id:6,item:'', lastDroppedItem: null ,classStyles: 'middle pin-1',accept:['all']},
        {id:7,item:'', lastDroppedItem: null ,classStyles: 'middle pin-2',accept:['all']},
        {id:8,item:'', lastDroppedItem: null ,classStyles: 'middle pin-3',accept:['all']},
        {id:9,item:'', lastDroppedItem: null ,classStyles: 'middle pin-4',accept:['all']},
        {id:10,item:'', lastDroppedItem: null ,classStyles: 'attack pin-1',accept:['all']},
        {id:11,item:'', lastDroppedItem: null ,classStyles: 'attack pin-2',accept:['all']},
    ]
}

export default function(state = initialState,action,index){
    switch (action.type) {
        case SET_PLAYER: {
            const { content } = action.payload;
            return {
                ...state,
                players: update(state.players,{[content.index]: {
                        lastDroppedItem:{ $set: content}
                }})
            }
        }
        default: {
          return state;
        }
      }
}