import {SET_PLAYER,CHANGE_PLAYER} from './actionsTypes'


export const setPlayerPosition = content => ({
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