import {createCards, showCards, productFilter, textFilter} from "./functions.js";
import { actualizarNumerito } from "./details.js";
const smartphones = document.getElementById('smart');
const laptops = document.getElementById('laptops');
const all = document.getElementById('all');
const textInput = document.getElementById('text-input');
const buttonInput = document.getElementById('button-input');
let urlProd = "https://acuastel.pythonanywhere.com/products";

async function productData(){
    await fetch(urlProd)
        .then(response => response.json())
        .then(data => {
            let catFilter;
            let cards = createCards(data);
            showCards(cards);
            smartphones.addEventListener("click", function(){
                catFilter = productFilter("smartphones", data);
                cards = createCards(catFilter);
                showCards(cards);
            });
            laptops.addEventListener("click", function(){
                catFilter = productFilter("laptops", data);
                cards = createCards(catFilter);
                showCards(cards);
            });
            all.addEventListener("click", function(){
                cards = createCards(data);
                showCards(cards);
            });
            console.log(cards);
            buttonInput.addEventListener('click', function(){//le da funcionalidad al boton de la barra de busqueda
                textFilter(data, textInput);//llama a la barra de busqueda para que efectue el filtro en base al nombre del producto
            });
        });
}
productData();//llama a los productos desde la api
actualizarNumerito();