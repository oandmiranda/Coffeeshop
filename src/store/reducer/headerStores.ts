import { createSlice } from "@reduxjs/toolkit";
import imageCoffeeshop from "../../assets/img/pagestore1.png";
import imageCoffeeshop1 from "../../assets/img/coffeeshop.png";
import imageCoffeeshop3 from "../../assets/img/pagestore3.png";
import { IState } from "./headerHome";

const initialState: IState[] = [{
    id: 1, 
    image: imageCoffeeshop3, 
    name: 'imageCoffeeshop3', 
    text: '',
    isVisible: false 
},
{ 
    id: 2,
    image: imageCoffeeshop, 
    name: 'imageCoffeeshop', 
    text: '', 
    isVisible: false 
},
{ 
    id: 4, 
    image: imageCoffeeshop1, 
    name: 'imageCoffeeshop1', 
    text: '', 
    isVisible: false 
}]

const headerStoresSlice = createSlice({
    name: 'headerStores',
    initialState,
    reducers: {}
})

export default headerStoresSlice.reducer;
