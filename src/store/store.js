import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import categoryReducer from './category/categorySlice.js'
import productReducer from './product/productSlice.js'
import orderReducer, { loacalStorageMiddleware } from './order/orderSlice.js'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
  },

  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(loacalStorageMiddleware)
})