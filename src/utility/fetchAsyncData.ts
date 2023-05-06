import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('', async (url:string) => {
    const response = await fetch(url)
    const data = response.json()
    return data
})