const login = document.querySelector('#login');
login.addEventListener('click', () => {
    window.location.href = 'login.html';
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
    alert('Hasta pronto!');
    localStorage.removeItem('login_success');
    window.location.href = 'index.html';
});

const perfilBtn = document.getElementById('perfil-btn');
perfilBtn.addEventListener("click", function(){

    window.location.href = './perfil.html';
});


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
            let saldoCliente = cliente.saldo;
            saldo.innerText = saldoCliente
    });
}
create();

