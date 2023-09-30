import { createSlice } from "@reduxjs/toolkit";
import imageTest from "../../assets/img/cake.png";
import cookieFamily from "../../assets/img/cookie-familia.png";
import cookieChocolate from "../../assets/img/cookie-chocolate.png";
import cookieNozes from "../../assets/img/cookie-nozes.png";
import cookieRedVelvet from "../../assets/img/cookie-redVervet.png";
import cookieMeioAmargo from "../../assets/img/cookie-meioAmargo.png";
import cappucino from "../../assets/img/capuccino.png";
import cappucino2 from "../../assets/img/capuccino2.png";
import cappucinoTrufado from "../../assets/img/capuccino-trufado.png";
import caféExpresso from "../../assets/img/cafe-expresso.png";
import chocolateLindit from "../../assets/img/chocolate-trufado-lindit.png";
import frapuccino from "../../assets/img/frapuccino.png";
import pudim from "../../assets/img/sobremsa-pudim.png";
import cocadaComSorvete from "../../assets/img/sobremesa-cocada-sorvete.png";
import tortaNutella from "../../assets/img/sobremesa-torta-nutella.png";
import croissantQueijo from "../../assets/img/croissant-queijo.png";
import croissantBauru from "../../assets/img/croissant-bauru.png";
import croissantPepperone from "../../assets/img/croissant-pepperoni.png";
import croissantPalmito from "../../assets/img/croissant-palmito.png";
import croissantFrango from "../../assets/img/croissant-frango.png";
import croissant_3Queijos from "../../assets/img/croissant-3queijos.png";
import croissantDoce from "../../assets/img/croissant-doce.png";

const initialState = [{ 
    image: croissantQueijo,
    category: 'croissant',
    name: 'Croissant de Queijo Mussarela', 
    id: 0,
},
{
    image: croissantBauru,
    category: 'croissant',
    name: 'Croissant de Bauru', 
    id: 1,
},
{
    image: cappucino,
    category: 'cafes',
    name: 'Cappucino tradicional', 
    id: 2,
},
{
    image: frapuccino,
    category: 'cafes',
    name: 'Frapuccino (vários sabores)', 
    id: 2,
},
{
    image: cookieFamily,
    category: 'cookies',
    name: 'Cookie tamanho família', 
    id: 3,
},
{
    image: cookieChocolate,
    category: 'cookies',
    name: 'Cookie de Chocolate', 
    id: 4,
},
{
    image: cappucino2,
    category: 'cafes',
    name: 'Capuccino com chantilly', 
    id: 5,
},
{
    image: imageTest,
    category: 'cakes',
    name: 'Item1', 
    id: 6,
},
{
    image: pudim,
    category: 'sobremesas',
    name: 'Pudim de Leite', 
    id: 7,
},
{
    image: cappucinoTrufado,
    category: 'cafes',
    name: 'Capuccino Trufado', 
    id: 8,
},
{
    image: imageTest,
    category: 'cakes',
    name: 'item2', 
    id: 9,
},
{
    image: imageTest,
    category: 'cakes',
    name: 'Item3', 
    id: 10,
},
{
    image: imageTest,
    category: 'cakes',
    name: 'Item4', 
    id: 11,
},
{
    image: cookieNozes,
    category: 'cookies',
    name: 'Cookie de Nozes', 
    id: 12,
},
{
    image: cookieRedVelvet,
    category: 'cookies',
    name: 'Cookie RedVelvet', 
    id: 12,
},
{
    image: cookieMeioAmargo,
    category: 'cookies',
    name: 'Cookie de Chocolate meio amargo', 
    id: 12,
},
{
    image: imageTest,
    category: 'cakes',
    name: 'Item5', 
    id: 13,
},
{
    image: caféExpresso,
    category: 'cafes',
    name: 'Café expresso', 
    id: 14,
},
{
    image: cocadaComSorvete,
    category: 'sobremesas',
    name: 'Cocada de forno com sorvete de creme', 
    id: 15,
},
{
    image: tortaNutella,
    category: 'sobremesas',
    name: 'Torta de Nutella', 
    id: 16,
},
{
    image: croissantFrango,
    category: 'croissant',
    name: 'Croissant de Frango com Catupiry', 
    id: 17,
},
{
    image: chocolateLindit,
    category: 'cafes',
    name: 'Chocolate Lindit trufado', 
    id: 18,
},
{
    image: croissantPalmito,
    category: 'croissant',
    name: 'Croissant de Palmito com queijo', 
    id: 19,
},
{
    image: croissant_3Queijos,
    category: 'croissant',
    name: 'Croissant de 3 queijos', 
    id: 19,
},
{
    image: croissantPepperone,
    category: 'croissant',
    name: 'Croissant de Pepperoni', 
    id: 20,
},
{
    image: croissantDoce,
    category: 'croissant',
    name: 'Croissant Doce (vários sabores)', 
    id: 19,
}]


const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {}
})

export default itemsSlice.reducer;