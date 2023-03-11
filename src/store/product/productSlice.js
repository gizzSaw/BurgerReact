import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {API_URL} from '../../const.js'
const initialState = {
    products: [],
    error: ''
}

export const productRequestAsync = createAsyncThunk(
    'product/fetch', () => fetch()
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder
        .addCase()
        .addCase()
        .addCase()
    }
})