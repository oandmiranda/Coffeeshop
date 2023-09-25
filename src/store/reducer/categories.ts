import { createSlice } from "@reduxjs/toolkit";
import imageCroissant from "../../img/croissant.png";
import imageCoffee from "../../img/coffe-cookie.png";
import imageCookie from "../../img/coffe-cookie.png";
import imageCoffeeShop from "../../img/coffeeshop.png";
import imageSobremesa from "../../img/sobremesa.png";

// export interface InitialStateInterface {
//     name: string 
//     id: string
//     image: string
//     images: {image: string}[]
// }

const initialState = [{ 
        name: 'Cafés', 
        id: 'cafes',
        image: imageCoffee, 
        title: 'Os melhores cafés de São Paulo'
    },
    { 
        name: 'Cookies',
        id: 'cookies', 
        image: imageCookie,
        title: 'Os melhores cafés de São Paulo'
    },
    {
        name: 'Croissant',
        id: 'croissant',
        image: imageCroissant,
        title: 'Os melhores cafés de São Paulo'
    },
    { 
        name: 'Sobremesas',
        id: 'sobremesas',
        image: imageSobremesa,
        title: 'Os melhores cafés de São Paulo'
    },
    { 
        name: 'Breakfast',
        id: 'breakfast',
        image: imageCoffeeShop,
        title: 'Os melhores cafés de São Paulo'
    }]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer;