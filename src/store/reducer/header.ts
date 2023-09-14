import { createSlice } from "@reduxjs/toolkit";
import coffee_Cookie from "../../img/coffe-cookie.png";
import croissant from "../../img/croissant.png";
import coffeeshop from "../../img/coffeeshop.png";
import cake from "../../img/cake.png";

const initialState = [{
    id: 1, 
    image: coffee_Cookie, 
    name: 'coffe and cookie', 
    text: '',
    isVisible: true 
},
{ 
    id: 2,
    image: croissant, 
    name: 'croissant', 
    text: 'Eleito o melhor Croissant pela Paris Coffe', 
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

const headerContentSlice = createSlice({
    name: 'headerHome',
    initialState,
    reducers: {}
})

export default headerContentSlice.reducer;
