import { createSlice } from "@reduxjs/toolkit";
import cookieFamily from "../../assets/img/cookie-familia.png";
import cookieChocolate from "../../assets/img/cookie-chocolate.png";
import cookieNozes from "../../assets/img/cookie-nozes.png";
import cookieRedVelvet from "../../assets/img/cookie-redVervet.png";
import cookieMeioAmargo from "../../assets/img/cookie-meioAmargo.png";
import cappucino from "../../assets/img/capuccino.png";
import cappucino2 from "../../assets/img/capuccino2.png";
import cappucinoTrufado from "../../assets/img/capuccino-trufado.png";
import cafeExpresso from "../../assets/img/cafe-expresso.png";
import cafeChantilly from "../../assets/img/cafe-chantilly.png";
import cafe2 from "../../assets/img/cafe2.png";
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
import cake1 from "../../assets/img/cake-1.png";
import cake2 from "../../assets/img/cake-2.png";
import cake3 from "../../assets/img/cake-3.png";
import cake4 from "../../assets/img/cake-4.png";
import cake5 from "../../assets/img/cake-5.png";
import cakeFolhado from "../../assets/img/cake-folhado.png";
import cakeCapuccino from "../../assets/img/cake-capuccino.png";
import cakeCereja from "../../assets/img/cake-cereja.png";
import cakeMorango from "../../assets/img/cake-morango.png";
import cakeNozes from "../../assets/img/cake-nozes.png";
import cakeBerry from "../../assets/img/cake-berry.png";

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
    id: 3,
},
{
    image: cookieFamily,
    category: 'cookies',
    name: 'Cookie tamanho família (vários sabores)', 
    id: 4,
},
{
    image: cookieChocolate,
    category: 'cookies',
    name: 'Cookie de Chocolate', 
    id: 5,
},
{
    image: cappucino2,
    category: 'cafes',
    name: 'Capuccino com chantilly de chocolate', 
    id: 6,
},
{
    image: cake1,
    category: 'cakes',
    name: 'Cake1', 
    id: 7,
},
{
    image: cake2,
    category: 'cakes',
    name: 'Cake2', 
    id: 8,
},
{
    image: cake3,
    category: 'cakes',
    name: 'Cake3', 
    id: 9,
},
{
    image: cake4,
    category: 'cakes',
    name: 'Cake4', 
    id: 10,
},
{
    image: cake5,
    category: 'cakes',
    name: 'Cake5', 
    id: 11,
},
{
    image: pudim,
    category: 'sobremesas',
    name: 'Pudim de Leite', 
    id: 12,
},
{
    image: cappucinoTrufado,
    category: 'cafes',
    name: 'Capuccino Trufado', 
    id: 13,
},
{
    image: cakeFolhado,
    category: 'cakes',
    name: 'Bolo Folhado ', 
    id: 14,
},
{
    image: cakeNozes,
    category: 'cakes',
    name: 'Bolo de Nozes ', 
    id: 15,
},
{
    image: cakeBerry,
    category: 'cakes',
    name: 'Bolo de Berry', 
    id: 16,
},
{
    image: cakeMorango,
    category: 'cakes',
    name: 'Bolo surpresa de morango', 
    id: 17,
},
{
    image: cakeCereja,
    category: 'cakes',
    name: 'Bolo de cereja', 
    id: 18,
},
{
    image: cookieNozes,
    category: 'cookies',
    name: 'Cookie de Nozes', 
    id: 19,
},
{
    image: cookieRedVelvet,
    category: 'cookies',
    name: 'Cookie RedVelvet', 
    id: 20,
},
{
    image: cookieMeioAmargo,
    category: 'cookies',
    name: 'Cookie de Chocolate meio amargo', 
    id: 21,
},
{
    image: cakeCapuccino,
    category: 'cakes',
    name: 'Bolo de Cappuccino', 
    id: 22,
},
{
    image: cafeExpresso,
    category: 'cafes',
    name: 'Café expresso', 
    id: 23,
},
{
    image: cocadaComSorvete,
    category: 'sobremesas',
    name: 'Cocada de forno com sorvete de creme', 
    id: 24,
},
{
    image: tortaNutella,
    category: 'sobremesas',
    name: 'Torta de Nutella', 
    id: 25,
},
{
    image: croissantFrango,
    category: 'croissant',
    name: 'Croissant de Frango com Catupiry', 
    id: 26,
},
{
    image: chocolateLindit,
    category: 'cafes',
    name: 'Chocolate Lindit trufado', 
    id: 27,
},
{
    image: croissantPalmito,
    category: 'croissant',
    name: 'Croissant de Palmito com queijo', 
    id: 28,
},
{
    image: croissant_3Queijos,
    category: 'croissant',
    name: 'Croissant de 3 queijos', 
    id: 29,
},
{
    image: croissantPepperone,
    category: 'croissant',
    name: 'Croissant de Pepperoni', 
    id: 30,
},
{
    image: croissantDoce,
    category: 'croissant',
    name: 'Croissant Doce (vários sabores)', 
    id: 31,
},
{
    image: cafeChantilly,
    category: 'cafes',
    name: 'Café com Chantilly', 
    id: 32,
},
{
    image: cafe2,
    category: 'cafes',
    name: 'Café com alguma coisa)', 
    id: 33,
}]


const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {}
})

export default itemsSlice.reducer;