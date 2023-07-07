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

const actualizarDatos = document.getElementById('modDatos');
actualizarDatos.addEventListener("click", function(){
    window.location.href = './cliente_update_cliente.html';
})
