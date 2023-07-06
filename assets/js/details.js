
let productContainer = document.getElementById ('product-details');
const numerito = document.getElementById ('litle-number');
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let urlProd = "https://acuastel.pythonanywhere.com/products";

async function create(){
    await fetch(urlProd)
        .then(response => response.json())
        .then(data =>{
            const productD = data.find(product => product.id == id);
            paintDetails(productD, productContainer);
            const sliderProduct1 = document.getElementById ('sliderproduct1');//agrego las imagenes del producto al slider
            const sliderProduct2 = document.getElementById ('sliderproduct2');
            const sliderProduct3 = document.getElementById ('sliderproduct3');
            const button = document.getElementById ('boton-agregar');
            button.addEventListener ('click', function(){//agrega el producto al carrito
                agregarAlCarrito(productD);
            });
            backgroundImages(sliderProduct1, productD.imagen1);
            backgroundImages(sliderProduct2, productD.imagen2);
            backgroundImages(sliderProduct3, productD.imagen3);
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
        <p>Descripcion: ${product.description}</p>
    </div>
    <div class="rating-detail">
        <p>Stock: ${product.stock}</p>
    </div>
    <div class="price">
    <p>Precio: $${product.price}</p>
    </div>
    </div>
    <div>
    <button class="btnLogin" onclick="history.back()">Atras</button>
    </div>
    <div>
    <button id="boton-agregar" class="btnLogin" >Añadir al Carrito</button>
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

function agregarAlCarrito(productD){//usa local storage para almacenar los productos del carrito en un array y modifica la cantidad de productos
    let login = sessionStorage.getItem("login");
    if(login == 'true'){
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
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, product) => acc + product.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

export {actualizarNumerito};