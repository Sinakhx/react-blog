import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { middlewares } from "./rootMiddleware";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
