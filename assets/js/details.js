
let productContainer = document.getElementById ('product-details');
const numerito = document.getElementById ('litle-number');
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let urlProd = "https://dummyjson.com/products";

async function create(){
    await fetch(urlProd)
        .then(response => response.json())
        .then(data =>{
            const productD = data.products.find(product => product.id == id);
            paintDetails(productD, productContainer);
            const sliderProduct1 = document.getElementById ('sliderproduct1');
            const sliderProduct2 = document.getElementById ('sliderproduct2');
            const sliderProduct3 = document.getElementById ('sliderproduct3');
            const button = document.getElementById ('boton-agregar');
            button.addEventListener ('click', function(){
                agregarAlCarrito(productD);
            });
            backgroundImages(sliderProduct1, productD.images[0]);
            console.log(productD.images.length);
            if(productD.images.length > 1){
                backgroundImages(sliderProduct2, productD.images[1]);
                backgroundImages(sliderProduct3, productD.images[2]);
            }else{
                backgroundImages(sliderProduct2, productD.images[0]);
                backgroundImages(sliderProduct3, productD.images[0]);
            }
            
            
            
    });
}
create();

function paintDetails(product, productContainer){
    let detail = "";
    detail = `
    <div class="title-detail">
        <h2>${product.title}</h2>
    </div>
    <div class"carousel">
    <aside class="slider-containerd"> 
    <div class="slider-framed">
        <ul>
            <li>
                <div id="sliderproduct1"></div>
            </li>
            <li>
                <div id="sliderproduct2"></div>
            </li>
            <li>
                <div id="sliderproduct3"></div>
            </li>
        </ul>
    </div>
</aside>
    </div>
    <div class="details-product">
    <div class="brand-detail">
        <p>Marca del producto: ${product.brand}</p>
    </div>
    <div class="description-detail">
        <p>Descriccion: ${product.description}</p>
    </div>
    <div class="rating-detail">
        <p>Calificacion: ${product.rating}</p>
    </div>
    <div class="price">
    <p>Precio: $${product.price}</p>
    </div>
    </div>
    <div>
    <button class="btnLogin" onclick="history.back()">Atras</button>
    </div>
    <div>
    <button id="boton-agregar" class="btnLogin">Añadir al Carrito</button>
    </div>
    `;
    productContainer.innerHTML = detail;
}

function backgroundImages(slide, product){
    slide.style.backgroundImage = `url("${product}")`;
    console.log(`url("${product}")`);
    
}
let productosEnCarrito;
let productosEnCarritoLs = localStorage.getItem("productos-En-Carrito");
if(productosEnCarritoLs){
    productosEnCarrito = JSON.parse(productosEnCarritoLs);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(productD){
    let productoA = productD;
    if(productosEnCarrito.some(producto => producto.id == productD.id)){
        const index = productosEnCarrito.findIndex(producto => producto.id === productD.id);
        productosEnCarrito[index].cantidad++;
    }else{
        productoA.cantidad = 1;
        productosEnCarrito.push(productoA);
    }
    actualizarNumerito();

    localStorage.setItem("productos-En-Carrito",JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, product) => acc + product.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

export {actualizarNumerito};