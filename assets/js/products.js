import {createCards, showCards, filterAll, productFilter, textFilter} from "./functions.js";
const smartphones = document.getElementById('smart');
const laptops = document.getElementById('laptops');
const all = document.getElementById('all');
const textInput = document.getElementById('text-input');
const buttonInput = document.getElementById('button-input');
let urlProd = "https://dummyjson.com/products";

async function productData(){
    await fetch(urlProd)
        .then(response => response.json())
        .then(data => {
            let cardsFilter = filterAll(data.products);
            let cards = createCards(cardsFilter);
            showCards(cards);
            smartphones.addEventListener("click", function(){
                cardsFilter = productFilter("smartphones", data.products);
                cards = createCards(cardsFilter);
                showCards(cards);
            });
            laptops.addEventListener("click", function(){
                cardsFilter = productFilter("laptops", data.products);
                cards = createCards(cardsFilter);
                showCards(cards);
            });
            all.addEventListener("click", function(){
                cardsFilter = filterAll(data.products);
                cards = createCards(cardsFilter);
                showCards(cards);
            });
            console.log(cards);
            buttonInput.addEventListener('click', function(){//le da funcionalidad al boton de la barra de busqueda
                textFilter(cardsFilter, textInput);//llama a la barra de busqueda para que efectue el filtro en base al nombre del producto
            });
        });
}
productData();//llama a los productos desde la api