function createCard(product){//crea una tarjeta de producto
    return `<a href="./details.html?id=${product.id}"><div class="card-principal">
    <div class="card-img"><img src="${product.imagen1}" alt=""></div>
    <div class="card-body">
        <div class="card-title">${product.title}</div>
        <div class="card-price">precio: $${product.price}</div>
    </div>
    </div>
    </a>`;
    
}
function createCards(products){
    let cards = "";
        for(let i=0; i<products.length; i++){//recorre el array de productos 
                cards += createCard(products[i]);//crea las tarjetas de cada producto en el array de productos y rellena el string con el html de cada producto
    }
    return cards;//devuelve un string con todas las tarjetas de producto
}
function showCards(cardsFilters){//muestra las tarjetas de producto
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = cardsFilters;
    
}
function filterAll(product){//filtra los productos disponibles
        const laptopsSmartphones = product.filter(function(producto) {
        return producto.category === "laptops" || producto.category === "smartphones";
        });
        return laptopsSmartphones;
    }
function productFilter(categoryF, product){//filtra los productos en base a una categoria
    const productf = product.filter(function(pro){
        return pro.category === categoryF;
    });
    return productf;
}
function textFilter(products, input){//le da funcionalidad a la barra de busqueda
        let productT = products.filter(product => product.title.toLowerCase().includes(input.value.toLowerCase()));//filtra los productos por texto
        let card = createCards(productT);//envia los productos que cumplen la condicion para crear las tarjetas
        if(card == ""){
            showCards("<h2>Lo sentimos no contamos con ese producto aun</h2>");//en caso de que no se encuentre el producto se imprime el h2
        }else{
            showCards(card);//se muestran las tarjetas
        }
}

document.addEventListener("DOMContentLoaded", function() {
    let login = sessionStorage.getItem("login");
    console.log(login);
    let btnIngresar = document.getElementById("login");
    let btnCerrarSesion = document.getElementById("logout");
    let carrito = document.getElementById("carrito");
    let agregar = document.getElementById("boton-agregar");

    if (login === "true") {
      // Mostrar el botón si la condición es verdadera
        btnCerrarSesion.style.display = "block";
        carrito.style.display = "block";
        btnIngresar.style.display = "none";
    } else {
      // Ocultar el botón si la condición es falsa
        btnCerrarSesion.style.display = "none";
        carrito.style.display = "none";
        btnIngresar.style.display = "block";
    }

    btnCerrarSesion.addEventListener("click", function() {
        sessionStorage.setItem("login", "false");
        // Realizar cualquier otra acción necesaria al cerrar sesión
        // ...
      });
});

export {createCards, showCards, filterAll, productFilter, textFilter};