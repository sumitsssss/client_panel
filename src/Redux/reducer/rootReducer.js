import { combineReducers } from "redux";
import clientReducers from "./clientReducer";


export default combineReducers({
    client: clientReducers,

});