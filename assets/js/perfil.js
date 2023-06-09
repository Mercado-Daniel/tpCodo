const clienteContainer = document.getElementById('perfil');
const queryString = location.search;
const saldo = document.getElementById('saldo');
const params = new URLSearchParams(queryString);
const id = sessionStorage.getItem("idCliente");
let urlCliente = "https://acuastel.pythonanywhere.com/clientes";

async function create(){
    await fetch(urlCliente)
        .then(response => response.json())
        .then(data =>{
            const cliente = data.find(cliente => cliente.id == id);
            console.log(cliente);
            paintDetails(cliente, clienteContainer);
            let saldoCliente = cliente.saldo;
            saldo.innerText = saldoCliente
    });
}
create();

function paintDetails(cliente, clienteContainer){
    let perfil = "";
    perfil = `
    <div class="title-detail">
        <h2>${cliente.usuario}</h2>
    </div>
    <div >
        <p>Nombre: ${cliente.nombre}</p>
        <p>Apellido: ${cliente.apellido}</p>
    </div>
    <div class="description-detail">
        <p>Direccion: ${cliente.direccion}</p>
    </div>
    <div class="rating-detail">
        <p>Numero de telefono: ${cliente.telefono}</p>
    </div>
    <div class="price">
    <p>Saldo: $${cliente.saldo}</p>
    </div>
    
    `;
    clienteContainer.innerHTML = perfil;
}

const actualizarDatos = document.getElementById('modDatos');
actualizarDatos.addEventListener("click", function(){
    window.location.href = './cliente_update_cliente.html';
})

const cargarSaldo = document.getElementById('cargarSaldo');
cargarSaldo.addEventListener("click", function(){
    window.location.href = './cargar_saldo.html';
});