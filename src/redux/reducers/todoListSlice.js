import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../utility/fetchAsyncData'

const initialState = {
  data: [],
  loading: false,
  error: null
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    dataRequested: (state) => {
      state.loading = true
      state.error = null
    },
    dataReceived: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    dataRequestFailed: (state, action) => {
      state.loading = false
      state.action = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { dataRequested, dataReceived, dataRequestFailed } = todoListSlice.actions

export const getTodoList = (state) => state.todoList


export default todoListSlice.reducer