import { createStore } from "redux";
import setPlayerPosition from "./reducers/setPlayerPosition";

export default createStore(setPlayerPosition,/* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );