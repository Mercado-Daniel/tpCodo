console.log(location.search) 
var id=location.search.substring(4)  
console.log(id)
const { createApp } = Vue

    createApp({
        data() {
            return {
                url:'https://acuastel.pythonanywhere.com/products/'+id,
                id:0,
                title:"",
                brand:"",
                category:"",
                description:"",
                imagen1:"",
                imagen2:"",
                imagen3:"",
                price:0,
                stock:0,
            }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.id=data.id
                        this.title=data.title
                        this.brand=data.brand
                        this.category=data.category
                        this.description=data.description
                        this.imagen1=data.imagen1
                        this.imagen2=data.imagen2
                        this.imagen3=data.imagen3
                        this.price=data.price  
                        this.stock=data.stock                   
                    })
                    .catch(err => {
                        console.error(err);
                        this.error=true              
                    })                
            },
            modificar(){

                let product = {
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
                    body: JSON.stringify(product),
                    method: 'PUT',
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