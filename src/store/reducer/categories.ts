import { createSlice } from "@reduxjs/toolkit";
import imageCroissant from "../../assets/img/croissant.png";
import imageCoffee from "../../assets/img/cafe-expresso.png";
import imageCookie from "../../assets/img/coffe-cookie.png";
import pudim from "../../assets/img/sobremsa-pudim.png";
import cake2 from "../../assets/img/cake-2.png";

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
        image: pudim,
    },
    { 
        name: 'Bolos',
        id: 'cakes',
        image: cake2,
    }]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer;