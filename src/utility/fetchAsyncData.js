import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('', async (url) => {
    const response = await fetch(url)
    const data = response.json()
    return data
})