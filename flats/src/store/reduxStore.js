import {applyMiddleware, combineReducers, createStore} from "redux";
import flatsReducer from "./reducers/flatsReducer";
import thunk from "redux-thunk";

let rootReducers = combineReducers({
    flatsContent: flatsReducer

})

const store = createStore(rootReducers, applyMiddleware(thunk))

window.__store__ = store;

export default store;