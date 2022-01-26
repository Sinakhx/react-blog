import { configureStore } from "@reduxjs/toolkit";
import { middlewares } from "./rootMiddleware";
// import { postReducer } from "./reducers/post";

const store = configureStore({
    reducer: {
        //posts
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
