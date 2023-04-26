function createCard(product){
    return `<div class="card-principal">
    <div class="card-img"><img src="${product.images[0]}" alt=""></div>
    <div class="card-title">${product.title}</div>
    <div class="card-price">precio: $$$$</div>
</div>`;
    
}
function createCards(products){
    let cards = "";
        for(let i=0; i<products.length; i++){
            if(filtro(products[i])){
                cards += createCard(products[i]);
            }
    }
    return cards;
}
function showCards(cardsFilters){//muestra las cards
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = cardsFilters;
}
function filtro(product){
    if((product.category == "smartphones") || (product.category ==  "laptops")){
        return true;
    }
    return false;
}

export {createCards, showCards};