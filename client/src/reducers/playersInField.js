import { ADD_PLAYER_NAME} from '../actions/actionsTypes';

export default function(state = [],action){
    switch (action.type) {
        case ADD_PLAYER_NAME: {
          return action.payload.content;
        }
        default: {
          return state;
        }
      }
}