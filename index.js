class ProductManager {
    static ListaProductos = []; 
    constructor(products) {
      this.id = products.id;
      this.title = products.title;
      this.description = products.description;
      this.price = products.price;
      this.thumbnail = products.thumbnail;
      this.stock = products.stock;
      ProductManager.id++;
      ProductManager.ListaProductos.push(this); 
    }

    static id = 0;
  
    precio(){
      console.log(`El precio del producto es ${this.price}!`);
    }
  
    static getProducts() {
      return ProductManager.ListaProductos;
    }
  
    static getProductById(id) {
      for (let i = 0; i < ProductManager.ListaProductos.length; i++) {
        if (ProductManager.ListaProductos[i].id == id) {
          return ProductManager.ListaProductos[i];
        }
      }
      console.log("No existe");
    }
  }
  
  let addProduct = new ProductManager({
    title: "Pelota",
    description: "Pelota esferodinamia",
    price: "10000",
    thumbnail: "image",
    id: "1",
    stock: "15",
  });
  
  let newProduct = {
    title: "Griferia",
    description: "Griferia para baño",
    price: 40.0,
    thumbnail: "imagen",
    stock: 593,
  };
  let addNewProduct = new ProductManager(newProduct);
  
  addProduct.precio();
  console.log(ProductManager.getProducts());
  console.log(ProductManager.getProductById("1"));
  console.log(ProductManager.getProductById("2"));
  