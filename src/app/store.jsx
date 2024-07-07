
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterSlice'
import ProductReducer from './reducers/ProductsSlice'
import CategoriesReducer from './reducers/CategoriesSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products:ProductReducer,
    categories:CategoriesReducer,
  },
})

