import { createSlice } from "@reduxjs/toolkit";
import imageXicara from "../../img/xicara.png";
import imageGraos from "../../img/graos.png";
import imageCoffe from "../../img/coffe-cookie.png";
import imageCookie from "../../img/coffe-cookie.png";
import imageCoffeeShop from "../../img/coffeeshop.png";

const initialState = [{ 
        id: 'Cafés', 
        image: imageXicara 
    },
    { 
        id: 'Cookies', 
        image: imageGraos 
    },
    {
        id: 'Croissant',
        image: imageCoffe 
    },
    { 
        id: 'Sobremesas',
        image: imageCookie 
    },
    { 
        id: 'Breakfast',
        image: imageCoffeeShop 
    }]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer;