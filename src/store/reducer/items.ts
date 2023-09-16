import { createSlice } from "@reduxjs/toolkit";
import imageTest from "../../img/cake.png";

const initialState = [{ 
    image: imageTest,
    category: 'croissant',
    name: 'Croissant de morango com Nutella', 
    id: 0,
},
{
    image: imageTest,
    category: 'croissant',
    name: 'Croissant de passas', 
    id: 1,
},
{
    image: imageTest,
    category: 'cafes',
    name: 'Café Expresso', 
    id: 2,
},
{
    image: imageTest,
    category: 'cookies',
    name: 'Cookie de Nutella', 
    id: 3,
},
{
    image: imageTest,
    category: 'cookies',
    name: 'Cookie de Doce de Leite', 
    id: 4,
},
{
    image: imageTest,
    category: 'cafes',
    name: 'Café torrado', 
    id: 5,
},
{
    image: imageTest,
    category: 'breakfast',
    name: 'Item1', 
    id: 6,
},
{
    image: imageTest,
    category: 'sobremesas',
    name: 'Pudim de Leite', 
    id: 7,
},
{
    image: imageTest,
    category: 'cafes',
    name: 'Smooth Coff', 
    id: 8,
},
{
    image: imageTest,
    category: 'breakfast',
    name: 'item2', 
    id: 9,
},
{
    image: imageTest,
    category: 'breakfast',
    name: 'Item3', 
    id: 10,
},
{
    image: imageTest,
    category: 'breakfast',
    name: 'Item4', 
    id: 11,
},
{
    image: imageTest,
    category: 'cookies',
    name: 'Cookie de maçã com canela', 
    id: 12,
},
{
    image: imageTest,
    category: 'breakfast',
    name: 'Item5', 
    id: 13,
},
{
    image: imageTest,
    category: 'cafes',
    name: 'Café com leite', 
    id: 14,
},
{
    image: imageTest,
    category: 'sobremesas',
    name: 'cocada de forno', 
    id: 15,
},
{
    image: imageTest,
    category: 'sobremesas',
    name: 'Bolo de nozes', 
    id: 16,
},
{
    image: imageTest,
    category: 'croissant',
    name: 'Croissant de queijo briet', 
    id: 17,
},
{
    image: imageTest,
    category: 'cafes',
    name: 'cappucino', 
    id: 18,
},
{
    image: imageTest,
    category: 'croissant',
    name: 'Croissant de frango com catupiry', 
    id: 19,
},
{
    image: imageTest,
    category: 'croissant',
    name: 'Croissant de Pepperoni', 
    id: 20,
}]


const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {}
})

export default itemsSlice.reducer;