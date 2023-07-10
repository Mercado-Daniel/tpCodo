const { createApp } = Vue
    createApp({
        data() {
            return {
                products:[],
                url:'https://acuastel.pythonanywhere.com/products',
                error:false,
                cargando:true,
                title:"",
                brand:"",
                category:"",
                description:"",
                imagen1:"",
                imagen2:"",
                imagen3:"",
                price:"",
                stock:"",
            }
        },
        methods: {
            fetchData(url) {                
            },
            grabar(){
                let products = {
                    title: this.title,
                    brand: this.brand,
                    category: this.category,
                    description: this.description,
                    imagen1: this.imagen1,
                    imagen2: this.imagen2,
                    imagen3: this.imagen3,
                    price: this.price,
                    stock: this.stock
                }
                var options = {
                    body: JSON.stringify(products),
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(function () {
                        alert("Producto Registrado")
                        window.location.href = "./admin_productos.html"
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al registrar Producto")
                    })
            }

        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')