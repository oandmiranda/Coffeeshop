import { createSlice } from "@reduxjs/toolkit";
import imageTest from "../../img/cake.png";

const initialState = [{ 
    image: imageTest,
    category: 'croissant',
    description: 'Croissant de morango com Nutella', 
    id: 0,
},
{
    image: imageTest,
    category: 'croissant',
    description: 'Croissant de passas', 
    id: 1,
},
{
    image: imageTest,
    category: 'cafes',
    description: 'Café Expresso', 
    id: 2,
},
{
    image: imageTest,
    category: 'cookies',
    description: 'Cookie de Nutella', 
    id: 3,
},
{
    image: imageTest,
    category: 'cookies',
    description: 'Cookie de Doce de Leite', 
    id: 4,
},
{
    image: imageTest,
    category: 'cafes',
    description: 'Café torrado', 
    id: 5,
},
{
    image: imageTest,
    category: 'breakfast',
    description: 'Item1', 
    id: 6,
},
{
    image: imageTest,
    category: 'sobremesas',
    description: 'Pudim de Leite', 
    id: 7,
},
{
    image: imageTest,
    category: 'cafes',
    description: 'Smooth Coff', 
    id: 8,
},
{
    image: imageTest,
    category: 'breakfast',
    description: 'item2', 
    id: 9,
},
{
    image: imageTest,
    category: 'breakfast',
    description: 'Item3', 
    id: 10,
},
{
    image: imageTest,
    category: 'breakfast',
    description: 'Item4', 
    id: 11,
},
{
    image: imageTest,
    category: 'cookies',
    description: 'Cookie de maçã com canela', 
    id: 12,
},
{
    image: imageTest,
    category: 'breakfast',
    description: 'Item5', 
    id: 13,
},
{
    image: imageTest,
    category: 'cafes',
    description: 'Café com leite', 
    id: 14,
},
{
    image: imageTest,
    category: 'sobremesas',
    description: 'cocada de forno', 
    id: 15,
},
{
    image: imageTest,
    category: 'sobremesas',
    description: 'Bolo de nozes', 
    id: 16,
},
{
    image: imageTest,
    category: 'croissant',
    description: 'Croissant de queijo briet', 
    id: 17,
},
{
    image: imageTest,
    category: 'cafes',
    description: 'cappucino', 
    id: 18,
},
{
    image: imageTest,
    category: 'croissant',
    description: 'Croissant de frango com catupiry', 
    id: 19,
},
{
    image: imageTest,
    category: 'croissant',
    description: 'Croissant de Pepperoni', 
    id: 20,
}]


const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {}
})

export default itemsSlice.reducer;