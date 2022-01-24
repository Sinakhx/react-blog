import { combineReducers } from "@reduxjs/toolkit";
// import { postReducer } from "./reducers/post";

const reducers = {
    // post: postReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
