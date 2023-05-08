import {createCards, showCards, filterAll, productFilter} from "./functions.js";
const smartphones = document.getElementById('smart');
const laptops = document.getElementById('laptops');
const all = document.getElementById('all');
let urlProd = "https://dummyjson.com/products";

async function productData(){
    await fetch(urlProd)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //if(data.products.category == "smartphones" || if(data.products.category ==  "laptops"){}
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
            

        });
}
productData();