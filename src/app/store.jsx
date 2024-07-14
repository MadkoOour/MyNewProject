
import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './reducers/ProductsSlice'
import CategoriesReducer from './reducers/CategoriesSlice'
import CartReducer from './reducers/CartSlice'


export const store = configureStore({
  reducer: {
    products:ProductReducer,
    categories:CategoriesReducer,
    cart:CartReducer,
  },
})

