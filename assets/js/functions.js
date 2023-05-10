function createCard(product){
    return `<a href="#"><div class="card-principal">
    <div class="card-img"><img src="${product.images[0]}" alt=""></div>
    <div class="card-body">
        <div class="card-title">${product.title}</div>
        <div class="card-price">precio: $${product.price}</div>
    </div>
    </div>
    </a>`;
    
}
function createCards(products){
    let cards = "";
        for(let i=0; i<products.length; i++){
                cards += createCard(products[i]);
    }
    return cards;
}
function showCards(cardsFilters){//muestra las cards
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = cardsFilters;
}
function filterAll(product){
        const laptopsSmartphones = product.filter(function(producto) {
        return producto.category === "laptops" || producto.category === "smartphones";
        });
        return laptopsSmartphones;
    }
function productFilter(categoryF, product){
    const productf = product.filter(function(pro){
        return pro.category === categoryF;
    });
    return productf;
}

export {createCards, showCards, filterAll, productFilter};