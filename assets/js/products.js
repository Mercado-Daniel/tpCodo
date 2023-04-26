import {createCards, showCards} from "./functions.js";

let urlProd = "https://dummyjson.com/products";

async function productData(){
    await fetch(urlProd)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //if(data.products.category == "smartphones" || if(data.products.category ==  "laptops"){}
            let cards = createCards(data.products);
            showCards(cards);
        });
}
productData();