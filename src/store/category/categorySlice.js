import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [],
    error: '',
    activeCategory: 0,
  };

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action) {
          state.activeCategory = action.payload.indexCategory;
        }
    },
    extraReducers: {
      
    }
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;