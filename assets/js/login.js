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
       data(){
        return{
            url:'https://acuastel.pythonanywhere.com/clientes',
            datos:[],
            email:"",
            contrasena:"",
        }
       },
       methods:{
        fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data =>{
                    this.datos = data
                })
                .catch(error => alert('se produjo un error' + error))
        },
        validar(){
            if(this.email == "admin@admin" && this.contrasena == "admin"){
                window.location.href = "administrador.html"
            }
            arreglo = this.datos.filter(x => x.email == this.email)
            if(arreglo[0].contrasena == this.contrasena){
                sessionStorage.setItem('login', 'true')
                sessionStorage.setItem('idCliente',arreglo[0].id)
                window.location.href = "index.html"
            }else{
                alert("email o contraseña erronea")
                
            }
        }
       },
       created(){
        this.fetchData(this.url)
       }
    }).mount('#app')
