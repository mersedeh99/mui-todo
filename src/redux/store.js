import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './reducers/todoListSlice'
import doneListReducer from './reducers/doneListSlice'
import tagsReducr from './reducers/tagsSlice'

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        doneList: doneListReducer,
        tags: tagsReducr
    }
})