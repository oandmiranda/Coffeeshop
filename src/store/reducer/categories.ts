import { createSlice } from "@reduxjs/toolkit";
import imageCroissant from "../../img/croissant.png";
import imageCoffee from "../../img/coffe-cookie.png";
import imageCookie from "../../img/coffe-cookie.png";
import imageCoffeeShop from "../../img/coffeeshop.png";
import imageSobremesa from "../../img/sobremesa.png";

export interface InitialStateInterface {
    name: string 
    id: string
    image: string
    images: {image: string}[]
}

const initialState = [{ 
        name: 'Cafés', 
        id: 'cafes',
        image: imageCoffee, 
    },
    { 
        name: 'Cookies',
        id: 'cookies', 
        image: imageCookie,
    },
    {
        name: 'Croissant',
        id: 'croissant',
        image: imageCroissant,
    },
    { 
        name: 'Sobremesas',
        id: 'sobremesas',
        image: imageSobremesa,
    },
    { 
        name: 'Breakfast',
        id: 'breakfast',
        image: imageCoffeeShop,
    }]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer;