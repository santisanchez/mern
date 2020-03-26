import {SET_PLAYER,CHANGE_PLAYER,ADD_PLAYER_NAME} from './actionsTypes'


export const setPlayersPositions = content => ({
    type: SET_PLAYER,
    payload:{
        content
    }
})

export const changePlayer = player => ({
    type: CHANGE_PLAYER,
    payload:{
        player
    }
})

export const playersInField = playerName => ({
    type: ADD_PLAYER_NAME,
    payload: playerName
})