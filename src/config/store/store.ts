import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todo from "../module/todo";

const rootReducer = combineReducers({ todo });
const store = configureStore({ reducer: rootReducer });

export default store;
export type RootState = ReturnType<typeof rootReducer>;
