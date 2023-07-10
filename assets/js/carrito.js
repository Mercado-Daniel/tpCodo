import {actualizarNumerito} from "./details.js";
let productoEnCarrito = JSON.parse(localStorage.getItem("productos-En-Carrito"));
const containerCarrito = document.getElementById("card-carrito-container");

const total = document.getElementById("total");

if(productoEnCarrito){
    const cards = createCardsCarrito(productoEnCarrito);
    containerCarrito.innerHTML = cards;
    let total = suma();
    
    
    console.log(location.search)     // lee los argumentos pasados a este formulario
    var id=sessionStorage.getItem("idCliente"); // producto_update.html?id=1
    console.log(id)
    const { createApp } = Vue

    createApp({
        data() {
            return {
                url:'https://acuastel.pythonanywhere.com/clientes/'+id,
                id:0,
                usuario:"",
                nombre:"",
                apellido:"",
                direccion:"",
                telefono:"",
                email:"",
                contrasena:"",
                saldo:0,
            }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.id=data.id
                        this.usuario=data.usuario
                        this.nombre=data.nombre
                        this.apellido=data.apellido
                        this.direccion=data.direccion
                        this.telefono=data.telefono
                        this.email=data.email
                        this.contrasena=data.contrasena
                        this.saldo = data.saldo;
                    })
                    .catch(err => {
                        console.error(err);
                        this.error=true              
                    })                
            },
            comprar(){
                if( this.saldo < total){
                   alert('Saldo insuficiente'); 
                }else{
                    let cliente = {
                        usuario: this.usuario,
                        nombre: this.nombre,
                        apellido: this.apellido,
                        direccion: this.direccion,
                        telefono: this.telefono,
                        email: this.email,
                        contrasena: this.contrasena,
                        saldo:this.saldo - total,
                    }
                    var options = {
                        body: JSON.stringify(cliente),
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        redirect: 'follow'
                    }
                    
                    fetch(this.url, options)
                        .then(function () {
                            alert("Gracias por su Compra")
                            window.location.href = '/perfil.html';
                            limpiarTodoCarrito();
                        })
                        .catch(err => {
                            console.error(err);
                            alert("Error al realizar la compra");
                        })

                }
            }
        },
        created() {
            this.fetchData(this.url);
        },
    }).mount('#app');
    let quitarUno = document.querySelectorAll(".btn-quitar1");
    quitarUno.forEach(boton =>{
        boton.addEventListener("click", quitarUnoDelCarrito);
    });
    const limpiar = document.getElementById("boton-limpiar");
    limpiar.addEventListener("click", limpiarTodoCarrito);
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
        <button id="${product.id}" class="btn-quitar1 btnLogin" v-on:click="">Quitar uno del Carrito</button>
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
    return suma;
}
