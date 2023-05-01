import { createStore , combineReducers } from "redux";
import serverData from "./ducks/serverData"

const reducers = combineReducers({
    ServerData:serverData
})

const store = createStore(reducers)


export default store;

