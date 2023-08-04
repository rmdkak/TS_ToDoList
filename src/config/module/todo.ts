import { createSlice } from "@reduxjs/toolkit";
import { ToDoList } from "../../type/type";

type DefualtType = {
  type: string;
};

type PayloadString = DefualtType & {
  payload: string;
};

type PayloadTodoList = DefualtType & {
  payload: ToDoList;
};

const initialState: ToDoList[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadTodoList) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadString) => {
      return state.filter((obj) => obj.id !== action.payload);
    },
    updateTodo: (state, action: PayloadString) => {
      return state.map((obj) => {
        if (obj.id === action.payload) {
          return { ...obj, isDone: !obj.isDone };
        }
        return { ...obj };
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
