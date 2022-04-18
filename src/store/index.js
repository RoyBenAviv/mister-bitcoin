import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./reducers/contactReducer";

export const store = createStore(contactReducer, applyMiddleware(thunk))

window.myStore = store;