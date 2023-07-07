// const signupForm = document.querySelector('#signupForm')
// signupForm.addEventListener('submit', (e)=> {
//     e.preventDefault()
//     const name = document.querySelector('#username').value
//     const email = document.querySelector('#email').value
//     const password = document.querySelector('#password').value

//     const Users = JSON.parse(localStorage.getItem('users')) || []
//     const isUserRegistered = Users.find(user => user.email === email)
//     if (isUserRegistered) {
//         return alert('El usuario ya está registrado!')
//     }

//     Users.push({name: name, email: email, password: password})
//     localStorage.setItem('users', JSON.stringify(Users))
//     alert('Registro Exitoso!')
//     window.location.href = 'login.html'
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
            grabar(){
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
                        window.location.href = "./clientes.html"
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