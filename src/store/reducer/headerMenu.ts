import { createSlice } from "@reduxjs/toolkit";
import coffeeImage from "../../assets/img/coffeeMenu.png";
import brigadeiroImage from "../../assets/img/brigadeiro.png";
import croissantImage from "../../assets/img/O melhor croissant de sp.png";
import cookieImage from "../../assets/img/cookieMenu.png";
import cakeImage from "../../assets/img/cake-1.png";

export interface IHeaderMenu {
    id: number 
    image: string
    name: string
}

const initialState: IHeaderMenu[] = [{
    id: 1, 
    image: coffeeImage, 
    name: 'coffee', 
},
{ 
    id: 2,
    image: brigadeiroImage, 
    name: 'brigadeiro', 
},
{ 
    id: 3, 
    image: croissantImage, 
    name: 'croissant', 
},
{ 
    id: 4, 
    image: cookieImage, 
    name: 'cookie', 
},
{ 
    id: 5, 
    image: cakeImage, 
    name: 'cake', 
}]

const headerMenuSlice = createSlice({
    name: 'headerMenu',
    initialState,
    reducers: {}
})

export default headerMenuSlice.reducer;
