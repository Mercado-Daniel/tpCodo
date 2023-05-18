function createCard(product){
    return `<a href="./details.html?id=${product.id}"><div class="card-principal">
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
    if(cardsFilters == ""){
        cardsContainer.innerHTML = "<h2>Lo sentimos no contamos con ese producto aun</h2>"
    }else{
        cardsContainer.innerHTML = cardsFilters;
    }
    
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
function textFilter(products, input){
        let productT = products.filter(product => product.title.toLowerCase().includes(input.value.toLowerCase()));
        let card = createCards(productT);
        console.log(card);
        showCards(card);
}

export {createCards, showCards, filterAll, productFilter, textFilter};