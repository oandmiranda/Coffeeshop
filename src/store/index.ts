import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducer/categories';
import itemsSlice from './reducer/items'; 
import headerContentSlice from './reducer/header';
// import { TypedUseSelectorHook } from 'react-redux';
// import { useSelector } from 'react-redux';


// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        items: itemsSlice,
        headerContent: headerContentSlice,
    }
})

// export type RootState = ReturnType<typeof store.getState>

export default store;