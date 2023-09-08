import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}]

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {}
})

export default itemsSlice.reducer;