import { createSlice } from "@reduxjs/toolkit";
import espacoKids1 from "../../assets/img/espaco-kids.png";
import cafeteriaSantoAndre from "../../assets/img/pagestore5.png"; 
import imageSelfie from "../../assets/img/image-selfie1.png";

export interface ICoffeeShopAreas {
    image: string
    id: number
    name: string
    title: string
    paragraph: string
    background: string
}

const initialState: ICoffeeShopAreas[] = [{
    image: espacoKids1,
    id: 1,
    name: "espacoKids1",
    title: "Espaço Kids",
    paragraph: "Espaço Kids confortável para receber seus filhos",
    background: "#bb6f06"
},
{
    image: cafeteriaSantoAndre,
    id: 2,
    name: "espacoKids2",
    title: "Ambiente aconchegante",
    paragraph: "Espaço aconchegante para você e sua família",
    background: "#0a0600"
},
{
    image: imageSelfie,
    id: 3,
    name: "selfieCoffee",
    title: "Seu rosto no seu Café",
    paragraph: "Sua experiência mais gostosa e divertida com a gente",
    background: "#bb6f06"
}]

const coffeeshopAreasSlice = createSlice({
    name: "coffeeshopAreas",
    initialState,
    reducers: {}
})

export default coffeeshopAreasSlice.reducer;