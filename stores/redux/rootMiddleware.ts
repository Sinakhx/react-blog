import logger from "redux-logger";
import type { AnyAction, Dispatch, Middleware } from "redux";
// import { articleMiddleware } from "./middlewares/article";

const middlewares: Middleware<any, any, Dispatch<AnyAction>>[] = [/* articleMiddleware */];

if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
}

export { middlewares };
