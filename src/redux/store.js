import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {rootReducer} from "./rootReducer";
import thunkMiddleWare from "redux-thunk";


const store = createStore(
    // rootreducer,
    //middleware
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;

//redux react-redux  redux-thunk redux-devtools-extension