import {actualizarNumerito} from "./details.js";
let productoEnCarrito = JSON.parse(localStorage.getItem("productos-En-Carrito"));
const containerCarrito = document.getElementById("card-carrito-container");
const limpiar = document.getElementById("boton-limpiar");
const total = document.getElementById("total");
const comprar = document.getElementById("boton-comprarTodo");

if(productoEnCarrito){
    const cards = createCardsCarrito(productoEnCarrito);
    containerCarrito.innerHTML = cards;
    suma();
    let quitarUno = document.querySelectorAll(".btn-quitar1");
    quitarUno.forEach(boton =>{
        boton.addEventListener("click", quitarUnoDelCarrito);
    });
    limpiar.addEventListener("click", limpiarTodoCarrito);
    comprar.addEventListener("click", limpiarTodoCarrito);
}else{
    containerCarrito.innerHTML = `<p>No hay ningun producto en el carrito</p>`;
}

function createCardCarrito(product){
    return `<div class="card-carrito">
    <div class="card-img-carrito"><img src="${product.imagen1}" alt=""></div>
    <div class="card-body-carrito">
        <div class="card-title-carrito">${product.title}</div>
        <div class="card-price-carrito">precio: $${product.price}</div>
        <div class="cantidad-carrito">Cantidad: ${product.cantidad}</div>
    </div>
    <div>
        <button id="${product.id}" class="btn-quitar1 btnLogin">Quitar uno del Carrito</button>
    </div>
    </div>`;
}
function createCardsCarrito(products){
    let cards = "";
        for(let i=0; i<products.length; i++){
            if(products[i].cantidad > 0){ 
                cards += createCardCarrito(products[i]);
            }
    }
    return cards;
}

function quitarUnoDelCarrito(e){
    console.log(e.currentTarget.id);
    productoEnCarrito.forEach(product =>{
        if(product.id == e.currentTarget.id){
            if(product.cantidad > 1){
                product.cantidad -= 1;
                console.log(product.cantidad);
                
            }else{
                product.cantidad = 0;               
            }
            localStorage.setItem("productos-En-Carrito",JSON.stringify(productoEnCarrito));
                productoEnCarrito = JSON.parse(localStorage.getItem("productos-En-Carrito"));
                let cards = createCardsCarrito(productoEnCarrito);
                containerCarrito.innerHTML = cards;
                location. reload();
        }
    });
    actualizarNumerito();
}

function limpiarTodoCarrito(){
    productoEnCarrito.forEach(product => {
        product.cantidad = 0;
    });
    localStorage.setItem("productos-En-Carrito",JSON.stringify(productoEnCarrito));
    productoEnCarrito = JSON.parse(localStorage.getItem("productos-En-Carrito"));
    let cards = createCardsCarrito(productoEnCarrito);
    containerCarrito.innerHTML = cards;
    location. reload();
}

function suma(){
    let suma = 0;
    productoEnCarrito.forEach(product => {
        suma += product.cantidad * product.price;
    });
    total.innerHTML = `<p>Total $${suma}</p>`;
}