// const loginForm = document.querySelector('#loginForm')

// loginForm.addEventListener('submit', (e)=> {
//     e.preventDefault()
//     const email = document.querySelector('#email').value
//     const password = document.querySelector('#password').value
//     const Users = JSON.parse(localStorage.getItem('users')) || []
//     const validUser = Users.find(user => user.email === email && user.password === password)
//     if (!validUser) {
//         return alert('Usuario y/o Contraseña incorrectos!')
//     }
//     alert(`Bienvenido ${validUser.name}`)
//     localStorage.setItem('login_success', JSON.stringify(validUser))
//     window.location.href = 'index.html'
// })

const { createApp } = Vue
    createApp({
        data() {
            return {
                clientes:[],
                url:'https://acuastel.pythonanywhere.com/clientes',
                error:false,
                cargando:true,
                usuario:"",
                nombre:"",
                apellido:"",
                direccion:"",
                telefono:"",
                email:"",
                contrasena:"",
                saldo:"",
            }
        },
        methods: {
            fetchData(url) {                
            },
            ingresar(){
                let clientes = {
                    usuario: this.usuario,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    direccion: this.direccion,
                    telefono: this.telefono,
                    email: this.email,
                    contrasena: this.contrasena,
                    saldo: this.saldo
                }
                var options = {
                    body: JSON.stringify(clientes),
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(function () {
                        alert("Usuario Registrado")
                        window.location.href = "./login.html"
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al registrar usuario")
                    })
            }

        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')
