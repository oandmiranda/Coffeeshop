import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducer/categories';
import itemsSlice from './reducer/items'; 
import headerContentSlice from './reducer/header';
import coffeeshopAreaSlice from "./reducer/coffeeshopAreas";

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        items: itemsSlice,
        headerContent: headerContentSlice,
        coffeeshopAreas: coffeeshopAreaSlice
    }
});

export default store;