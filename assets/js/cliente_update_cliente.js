
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
                        this.saldoActual = data.saldo
                    })
                    .catch(err => {
                        console.error(err);
                        this.error=true              
                    })                
            },
            modificar(){
                let cliente = {
                    usuario: this.usuario,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    direccion: this.direccion,
                    telefono: this.telefono,
                    email: this.email,
                    contrasena: this.contrasena,
                    saldo:this.saldo + this.saldoActual,
                }
                var options = {
                    body: JSON.stringify(cliente),
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(function () {
                        alert("Usuario Actualizado")
                        window.location.href = '/perfil.html';
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al actualizar el usuario")
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')