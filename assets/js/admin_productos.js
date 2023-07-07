const { createApp } = Vue
    createApp({
        data() {
            return {
                products:[],
                url:'https://acuastel.pythonanywhere.com/products',
                error:false,
                cargando:true,
                brand:"",
                category:"",
                description:"",
                imagen1:"",
                imagen2:"",
                imagen3:"",
                price:"",
                stock:"",
                title:"",
            }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.products=data;
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
  