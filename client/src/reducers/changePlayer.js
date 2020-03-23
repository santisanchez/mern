import { CHANGE_PLAYER} from '../actions/actionsTypes';

export default function(state = initialState,action){
    switch (action.type) {
        case CHANGE_PLAYER: {
          return action.payload.content;
        }
        default: {
          return state;
        }
      }
}