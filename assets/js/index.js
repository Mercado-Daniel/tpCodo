import {createCards, showCards, productFilter} from "./functions.js";
const smartphones = document.getElementById('smart-link');
const laptops = document.getElementById('laptops-link');
let smartActive = false;
let laptopActive = false;
let urlProd = "https://dummyjson.com/products";

async function productData(){
    await fetch(urlProd)
        .then(response => response.json())
        .then(data => {
            let cardsFilter;
            let cards;
            smartphones.addEventListener("click", function(){
                if(smartActive === false){
                    cardsFilter = productFilter("smartphones", data.products);
                    cards = createCards(cardsFilter);
                    showCards(cards);
                    smartActive = true;
                }else{
                    cards = "";
                    showCards(cards);
                    smartActive = false;
                }
            });
            laptops.addEventListener("click", function(){
                if(laptopActive === false){
                    cardsFilter = productFilter("laptops", data.products);
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