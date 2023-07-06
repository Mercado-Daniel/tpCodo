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


