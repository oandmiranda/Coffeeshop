import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducer/categories';
import itemsSlice from './reducer/items'; 

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        items: itemsSlice
    }
})

export default store;