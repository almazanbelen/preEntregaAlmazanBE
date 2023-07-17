class ProductManager {
    constructor(){
        this.products = [];
        this.nextId = 1
    }

    addProducts(product){ 
        if (!this.productValid(product)){
            console.log("Error: Producto no válido")
            return
        }
        
        if (this.codeDuplicate(product.code)){
            console.log("Error: Código de producto ya utilizado")
            return
        }

        product.id= this.nextId++       
        this.products.push(product)
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const productId = this.products.find((p)=> p.id === id)
        if(productId){            
            return productId 
        } else {
            console.error("Not found")
        }
    }

    productValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    codeDuplicate(code){
        return this.products.some((p)=> p.code === code)
    }


}

//Instancia

const productManager = new ProductManager()

//Agregar eventos

productManager.addProducts({
    title: "Gorra",
    description: "Descripcion del producto",
    price: 3000,
    thumbnail: "./imgGorra.png",
    code: "ZK363F",
    stock: 15
})
productManager.addProducts({
    title: "Pantalon",
    description: "Descripcion del producto",
    price: 8000,
    thumbnail: "./imgPantalon.png",
    code: "BU365G",
    stock: 20
})
productManager.addProducts({
    title: "Remera",
    description: "Descripcion del producto",
    price: 5000,
    thumbnail: "./imgRemera.png",
    code: "PO315L",
    stock: 10
})



//Obtener listado de productos

//const productsList = productManager.getProducts()
//console.log(productsList)


//Obtener productos por id

// const productId = productManager.getProductById(1)
// console.log(productId)

//Producto inexistente

//productManager.getProductById(5)

