class ProductManager{
    constructor(products){
        this.title = products.title
        this.description = products.description
        this.price = products.price
        this.thumbnail = products.thumbnail
        this.id = products.id
        this.stock = products.stock
    }

addProduct(newProduct){
    newProduct.id = this.products.length + 1;
    this.products.push(newProduct);
}
}

const Productos = [
    {id: 1, title: "Bomba", description: "Bomba presurizadora", price: 10.0, thumbnail: "https://url-del-producto-1.jpg", stock: 15},
    {id: 2, title: "Pelota", description: "Pelota esferodinamia", price: 20.0, thumbnail: "https://url-del-producto-2.jpg", stock: 4},
    {id: 3, title: "Masajeador", description: "Masajeador de cuello", price: 30.0, thumbnail: "https://url-del-producto-3.jpg", stock: 0}
];

const productManager = new ProductManager(Productos);

const newProduct = {
    title: "Griferia",
    description: "Griferia para baño",
    price: 40.0,
    thumbnail: "https://url-del-nuevo-producto.jpg",
    stock: 593
};