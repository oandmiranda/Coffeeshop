import { createSlice } from "@reduxjs/toolkit";
import imageCroissant from "../../assets/img/croissant.png";
import imageCoffe from "../../assets/img/cafe-category.png";
import imageCookie from "../../assets/img/coffe-cookie.png";
import imageSobremesa from "../../assets/img/sobremesa-morango.png";
import cake2 from "../../assets/img/cake-2.png";
import smallImageCoffee from "../../assets/img/categoryCoffee.png";
import smallImageCookie from "../../assets/img/category-cookie.png";
import smallImageCroissant from "../../assets/img/category-croissant.png";
import smallImageSobremesa from "../../assets/img/category-sobremesa.png";
import smallImageCake from "../../assets/img/category-cake.png";

export interface ICategories {
    name: string 
    id: string
    image: string
    categoryImage: string
}

const initialState: ICategories[] = [{ 
        name: 'Cafés', 
        id: 'cafes',
        image: imageCoffe,
        categoryImage: smallImageCoffee
    },
    { 
        name: 'Cookies',
        id: 'cookies', 
        image: imageCookie,
        categoryImage: smallImageCookie
    },
    {
        name: 'Croissants',
        id: 'croissant',
        image: imageCroissant,
        categoryImage: smallImageCroissant
    },
    { 
        name: 'Sobremesas',
        id: 'sobremesas',
        image: imageSobremesa,
        categoryImage: smallImageSobremesa
    },
    { 
        name: 'Bolos',
        id: 'cakes',
        image: cake2,
        categoryImage: smallImageCake
    }]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer;