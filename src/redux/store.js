import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import reducer from "./reducers/index.js";

const middleware = applyMiddleware(thunk, createLogger())

export default createStore(reducer, middleware);