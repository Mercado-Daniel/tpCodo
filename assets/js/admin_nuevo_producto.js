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