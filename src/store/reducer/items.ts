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
import pudim from "../../assets/img/sobremesa-pudim.png";
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
import cakeCapuccino from "../../assets/img/cake-capuccino.png";
import cakeCereja from "../../assets/img/cake-cereja.png";
import cakeMorango from "../../assets/img/cake-morango.png";
import cakeBerry from "../../assets/img/cake-berry.png";
import americanCookie from "../../assets/img/american-cookie4.png";
import cookieMms from "../../assets/img/cookie-mms.png";
import cookieChocolate4 from "../../assets/img/cookie-chocolate4.png";
import cheeseCake from "../../assets/img/cheesecake.png";
import paoDeMel from "../../assets/img/pao-de-mel.png";
import icecream from "../../assets/img/sorvete.png";
import saladaDeFruta from "../../assets/img/salada-de-fruta.png";
import mousseChocolate from "../../assets/img/mousse-chocolate.png";
import tortaHolandesa from "../../assets/img/torta-holandesa.png";
import cakePacoca from "../../assets/img/cake-pacoca.png";
import cakeLimon from "../../assets/img/cake-limon.png";

const initialState = [{ 
    image: croissantQueijo,
    category: 'croissant',
    name: 'Croissant de Mussarela', 
    id: 0,
    description: 'Croissant recheado com Queijo Mussarela e Orégano'
},
{
    image: croissantBauru,
    category: 'croissant',
    name: 'Croissant de Bauru', 
    id: 1,
    description: 'Croissant recheado com Queijo Mussarela, Presunto de Parma e Tomate fresco'
},
{
    image: cappucino,
    category: 'cafes',
    name: 'Cappucino tradicional', 
    id: 2,
    description: 'Um deleite italiano requintado que combina a intensidade do nosso espresso perfeitamente extraído com uma camada generosa de espuma de leite cremosa.'
},
{
    image: frapuccino,
    category: 'cafes',
    name: 'Frapuccino', 
    id: 3,
    description: 'Nosso Frappuccino combina a indulgência do café espresso, leite gelado, açúcar e gelo, tudo misturado até atingir uma textura cremosa e suave.'
},
{
    image: cookieFamily,
    category: 'cookies',
    name: 'Cookie de Chocolate (Tamanho família)', 
    id: 4,
    description: '"Cookão" com uma casquinha crocante por fora e um miolo macio e recheado de pedaços de chocolate, é o cookie perfeito para compartilhar em família.'
},
{
    image: cookieChocolate,
    category: 'cookies',
    name: 'Cookie de Alpino', 
    id: 5,
    description: 'Delicioso Cookie crocante com gotas de Chocolate Alpino'
},
{
    image: cappucino2,
    category: 'cafes',
    name: 'Capuccino com chantilly de chocolate', 
    id: 6,
    description: 'Delicioso cappuccino com combinação perfeita de expresso encorpado, leite vaporizado e uma generosa cobertura de chantilly de chocolate cremoso.'
},
{
    image: cake1,
    category: 'cakes',
    name: 'Trufado Preto e Branco', 
    id: 7,
    description: 'Bolo de massa de chocolate, recheio de trufado preto e trufas brancas, cobertura de trufado de chocolate preto, trufas brancas'
},
{
    image: cake2,
    category: 'cakes',
    name: 'Trufado Meio Amargo', 
    id: 8,
    description: 'Bolo de massa de chocolate meio amargo com recheio trufado de creme de avelã, cobertura de bombom ao leite e chocolate meio amargo'
},
{
    image: cake3,
    category: 'cakes',
    name: 'Aerado', 
    id: 9,
    description: 'Bolo de massa de chocolate, recheio de mousse de chocolate e cobertura de chantilly com cereja.'
},
{
    image: cake4,
    category: 'cakes',
    name: 'Red Velvet (Perfil Americano)', 
    id: 10,
    description: 'Bolo de massa red velvet, recheios de mousse de cream cheese e cobertura de strawberry'
},
{
    image: pudim,
    category: 'sobremesas',
    name: 'Pudim de Leite', 
    id: 12,
    description: 'Feito com ingredientes cuidadosamente selecionados, ele é uma combinação perfeita de textura suave e doçura delicada. Cada pedaço derrete na boca, revelando a riqueza do leite condensado caramelizado que o envolve. '
},
{
    image: cappucinoTrufado,
    category: 'cafes',
    name: 'Capuccino Trufado', 
    id: 13,
    description: 'Expresso de alta qualidade, misturado com leite vaporizado para criar a base perfeita. Em seguida, incorporamos um toque de ganache de chocolate trufado, que se dissolve delicadamente na bebida'
},
{
    image: cakeBerry,
    category: 'cakes',
    name: 'Bolo Berry', 
    id: 16,
    description: 'Bolo de massa de chocolate, recheio de avelã com essência de Strowberry e cobertura de Strowberry (decorativas)'
},
{
    image: cakeMorango,
    category: 'cakes',
    name: 'Iogurte', 
    id: 17,
    description: 'Bolo de massa de baunilha, recheio de mousse de iogurte, cobertura de mousse de iogurte e morangos (decorativos)'
},
{
    image: cakeCereja,
    category: 'cakes',
    name: 'Delícia de Cereja', 
    id: 18,
    description: 'Bolo de massa de baunilha, recheio de mousse de cerejas, cobertura de mousse branca e cerejas (decorativas).'
},
{
    image: cookieNozes,
    category: 'cookies',
    name: 'Cookie de Nozes', 
    id: 19,
    description: 'Delicioso Cookie crocante com Nozes frescos'
},
{
    image: cookieRedVelvet,
    category: 'cookies',
    name: 'Cookie RedVelvet', 
    id: 20,
    description: 'Delicioso Cookie crocante com massa RedVelvet e castanhas'
},
{
    image: cookieMeioAmargo,
    category: 'cookies',
    name: 'Cookie Formigueiro', 
    id: 21,
    description: 'Delicioso Cookie crocante de Chocolate meio amargo'
},
{
    image: cakeCapuccino,
    category: 'cakes',
    name: 'Delícia de Ninho', 
    id: 22,
    description: 'Bolo de massa de chocolate, recheio de mousse de leite em pó e cobertura de ganache'
},
{
    image: cafeExpresso,
    category: 'cafes',
    name: 'Café expresso', 
    id: 23,
    description: 'Café expresso com grãos moídos na hora'
},
{
    image: cocadaComSorvete,
    category: 'sobremesas',
    name: 'Cocada', 
    id: 24,
    description: 'Deliciosa Cocada de forno com sorvete de creme'
},
{
    image: tortaNutella,
    category: 'sobremesas',
    name: 'Torta de Nutella cremosa', 
    id: 25,
    description: 'Deliciosa Torta de Nutella cremosa com base de mousse de chocolate ao leite'
},
{
    image: croissantFrango,
    category: 'croissant',
    name: 'Croissant de Frango com Catupiry', 
    id: 26,
    description: 'Delicioso Croissant recheado com Frango temperado e desfiado e Catypury Original'
},
{
    image: chocolateLindit,
    category: 'cafes',
    name: 'Chocolate Lindit trufado', 
    id: 27,
    description: 'Maravilhoso Chocolate feito com chocolate Lindit derretido e lascas de chocolate'
},
{
    image: croissantPalmito,
    category: 'croissant',
    name: 'Croissant de Palmito', 
    id: 28,
    description: 'Delicioso Croissant recheado com Palmito em pedaços e Queijo Mussarela'
},
{
    image: croissant_3Queijos,
    category: 'croissant',
    name: 'Croissant de 3 queijos', 
    id: 29,
    description: 'Delicioso Croissant recheado com Queijo Mussarela, Gorgonzola e Catupury Original'
},
{
    image: croissantPepperone,
    category: 'croissant',
    name: 'Croissant de Pepperoni', 
    id: 30,
    description: 'Delicioso Croissant recheado com muito Pepperoni e Queijo Mussarela'
},
{
    image: croissantDoce,
    category: 'croissant',
    name: 'Croissant de Banana com Doce de Leite', 
    id: 31,
    description: 'Delicioso Croissant de Banana com Doce de Leite caseiro'
},
{
    image: cafeChantilly,
    category: 'cafes',
    name: 'Café com Chantilly tradicional', 
    id: 32,
    description: 'Delicioso Café Expresso tradicional coberto com Chantilly e chocolate em pó polvilhado'
},
{
    image: cafe2,
    category: 'cafes',
    name: "Cappuccino Hershey's", 
    id: 33,
    description: "Delicioso Capuccinno cremoso com Hershey's (ao leite) derretido e mesclado com café expresso"
},
{
    image: americanCookie,
    category: 'cookies',
    name: "Cookie Preto e Branco", 
    id: 34,
    description: "Delicioso Cookie metade chocolate e metade chocolate branco recheado com Doce de Leite"
},
{
    image: cookieMms,
    category: 'cookies',
    name: "Cookie MM'S", 
    id: 35,
    description: "Delicioso Cookie de bauninha com MM'S"
},
{
    image: cookieChocolate4,
    category: 'cookies',
    name: "Cookie de Chocolate", 
    id: 36,
    description: "Delicioso Cookie de Chocolate com recheio de Chocolate ao Leite"
},
{
    image: cheeseCake,
    category: 'sobremesas',
    name: "Cheesecake de Frutas Vermelhas", 
    id: 37,
    description: "Delicioso CheeseCake cremoso com um festival de frutas vermelhas frescas "
},
{
    image: paoDeMel,
    category: 'sobremesas',
    name: "Pão de mel", 
    id: 38,
    description: "Pão de mel suculento com recheio de Chocolate ao leite ou Doce de leite"
},
{
    image: icecream,
    category: 'sobremesas',
    name: "Sorvetes", 
    id: 39,
    description: "Sorvete super cremoso de Creme ou Morango"
},
{
    image: saladaDeFruta,
    category: 'sobremesas',
    name: "Salada de Frutas", 
    id: 40,
    description: "Salada de Frutas frescas a gosto (Kiwi, Morango, Tangerina, Abacaxi, Banana, Manga, Maça e Uva)"
},
{
    image: mousseChocolate,
    category: 'sobremesas',
    name: "Mousse de Chocolate", 
    id: 41,
    description: "Delicioso Mousse de Chocolate cremoso com chantilly e Strowberry"
},
{
    image: tortaHolandesa,
    category: 'sobremesas',
    name: "Torta Holandesa", 
    id: 42,
    description: "Torta Holandesa cremosa eleita a melhor de São Paulo"
},
{
    image: cakePacoca,
    category: 'cakes',
    name: "Bolo Paçoca", 
    id: 43,
    description: "Delicioso bolo feito com massa de paçoca recheado e coberto com creme de macarujá"
},
{
    image: cakeLimon,
    category: 'cakes',
    name: "Bolo de Limão", 
    id: 44,
    description: "Delicioso bolo com massa de limão e bauninha coberto com mousse de limão"
},
]


const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {}
})

export default itemsSlice.reducer;