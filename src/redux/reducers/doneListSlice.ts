import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchData } from '../../utility/fetchAsyncData'
import type { RootState } from '../store';

type listItems = {
    id:number,
    title:string
}

export interface doneListState {
    data:Array<listItems>,
    loading:boolean,
    error: any
}

const initialState:doneListState = {
    data: [{
        id:0,
        title:''
    }],
    loading: false,
    error: null
}

export const doneListSlice = createSlice({
    name: 'doneList',
    initialState,
    reducers: {
        dataRequested: (state) => {
            state.loading = true
            state.error = null
        },
        dataReceived: (state, action:PayloadAction<Array<listItems>>) => {
            state.loading = false
            state.data = action.payload
        },
        dataRequestFailed: (state, action:PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
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
export const { dataRequested, dataReceived, dataRequestFailed } = doneListSlice.actions

export const getDoneList = (state:RootState) => state.doneList


export default doneListSlice.reducer