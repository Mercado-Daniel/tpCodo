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
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.clientes=data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })                            
            },            
            eliminar(id) {
                const url = this.url+'/' + id;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        alert('Registro Eliminado')
                        location.reload(); // recarga el json luego de eliminado el registro
                    })
            }            
        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')
  