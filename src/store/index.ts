import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducer/index';

const store = configureStore({
    reducer: {
        categories: categoriesSlice
    }
})

export default store;