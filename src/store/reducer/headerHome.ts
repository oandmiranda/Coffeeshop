import { createSlice } from "@reduxjs/toolkit";
import coffee_Cookie from "../../assets/img/coffe-cookie.png";
import coverCroissant from "../../assets/img/cover-croissant.png";
import coffeeshop from "../../assets/img/coffeeshop.png";
import cake from "../../assets/img/cake.png";

export interface IHeaderHome {
    id: number 
    image: string
    name: string 
    text: string 
    isVisible: boolean
}

const initialState: IHeaderHome[] = [{
    id: 1, 
    image: coffee_Cookie, 
    name: 'coffe and cookie', 
    text: '',
    isVisible: true 
},
{ 
    id: 2,
    image: coverCroissant, 
    name: 'croissant', 
    text: '', 
    isVisible: false 
},
{ 
    id: 3, 
    image: coffeeshop, 
    name: 'coffeeshop', 
    text: '', 
    isVisible: false
},
{ 
    id: 4, 
    image: cake, 
    name: 'cake', 
    text: '', 
    isVisible: false 
}]

const headerHomeSlice = createSlice({
    name: 'headerHome',
    initialState,
    reducers: {}
})

export default headerHomeSlice.reducer;
