import { createSlice } from "@reduxjs/toolkit";
import imageXicara from "../../img/xicara.png";
import imageGraos from "../../img/graos.png";
import imageCoffe from "../../img/coffe-cookie.png";
import imageCookie from "../../img/coffe-cookie.png";
import imageCoffeeShop from "../../img/coffeeshop.png";

const initialState = [{ 
        description: 'Cafés', 
        id: 'cafes',
        image: imageXicara 
    },
    { 
        description: 'Cookies',
        id: 'cookies', 
        image: imageGraos 
    },
    {
        description: 'Croissant',
        id: 'croissant',
        image: imageCoffe 
    },
    { 
        description: 'Sobremesas',
        id: 'sobremesas',
        image: imageCookie 
    },
    { 
        description: 'Breakfast',
        id: 'breakfast',
        image: imageCoffeeShop 
    }]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer;