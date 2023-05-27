import {createCards, showCards, productFilter} from "./functions.js";
const smartphones = document.getElementById('smart-link');
const laptops = document.getElementById('laptops-link');
let smartActive = false;
let laptopActive = false;
let urlProd = "https://dummyjson.com/products";

async function productData(){//obtiene los productos de la api
    await fetch(urlProd)
        .then(response => response.json())
        .then(data => {
            let cardsFilter;
            let cards;
            smartphones.addEventListener("click", function(){//al hacer click en la targeta smartphones se crean las tarjetas de los productos smartphones
                if(smartActive === false){//uso la condicion Active para escribir o borrar las tarjetas segun corresponda
                    cardsFilter = productFilter("smartphones", data.products);//llamo solo los productos de la categoria smartphones
                    cards = createCards(cardsFilter);
                    showCards(cards);
                    smartActive = true;
                }else{
                    cards = "";
                    showCards(cards);
                    smartActive = false;
                }
            });
            laptops.addEventListener("click", function(){//al hacer click en la tarjeta laptops se cran las tarjetas de los productos laptops
                if(laptopActive === false){//uso la condicion Active para escribir o borrar las tarjetas segun corresponda
                    cardsFilter = productFilter("laptops", data.products);//llamo solo los productos de la categoria laptops
                    cards = createCards(cardsFilter);
                    showCards(cards);
                    laptopActive = true;
                }else{
                    cards = "";
                    showCards(cards);
                    laptopActive = false;
                }
            });
        });
}
productData();