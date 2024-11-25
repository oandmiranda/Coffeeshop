import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducer/categories';
import itemsSlice from './reducer/items'; 
import headerHomeSlice from './reducer/headerHome';
import coffeeshopAreaSlice from "./reducer/coffeeshopAreas";
import headerStoresSlice from './reducer/headerStores';
import headerMenuSlice from './reducer/headerMenu';

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        items: itemsSlice,
        headerHome: headerHomeSlice,
        coffeeshopAreas: coffeeshopAreaSlice,
        headerStores: headerStoresSlice,
        headerMenu: headerMenuSlice
    }
});

export default store;