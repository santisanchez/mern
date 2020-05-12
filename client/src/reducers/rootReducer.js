import {combineReducers} from 'redux';
import playersPositions from "./playersPositions";
import playersInField from './playersInField';

export const rootReducer = combineReducers({playersPositions:playersPositions,playersInField:playersInField})