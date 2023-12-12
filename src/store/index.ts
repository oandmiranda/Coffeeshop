import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducer/categories';
import itemsSlice from './reducer/items'; 
import headerHomeSlice from './reducer/headerHome';
import coffeeshopAreaSlice from "./reducer/coffeeshopAreas";

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        items: itemsSlice,
        headerHome: headerHomeSlice,
        coffeeshopAreas: coffeeshopAreaSlice
    }
});

export default store;