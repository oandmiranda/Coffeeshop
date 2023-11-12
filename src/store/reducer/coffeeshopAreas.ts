import { createSlice } from "@reduxjs/toolkit";
import espacoKids1 from "../../assets/img/espaco-kids.png";
import coffeeshop from "../../assets/img/coffeeshop.png";

const initialState = [{
    image: espacoKids1,
    id: 1,
    name: "espacoKids1",
    title: "Espaço Kids",
    paragraph: "Espaço Kids confortável para receber seus filhos",
    background: "#bb6f06"
},
{
    image: coffeeshop,
    id: 2,
    name: "espacoKids2",
    title: "Ambiente aconchegante",
    paragraph: "Espaço aconchegante para você e sua família",
    background: "#0a0600"
}]

const coffeeshopAreasSlice = createSlice({
    name: "coffeeshopAreas",
    initialState,
    reducers: {}
})

export default coffeeshopAreasSlice.reducer;