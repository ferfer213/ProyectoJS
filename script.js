//Productos del kiosco online

class Producto {
    constructor(id,nombre, precio,desc,imagen) {
        this.id      = parseFloat(id)
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.desc    = desc
        this.img     = imagen
    }
mostrarDatos(){
        console.log(`${this.id} - El producto es ${this.nombre} y vale $${this.precio}. `)
    }
}
const carrito =[];

const stockProductos = [];

let producto1 = (new Producto(1,"arroz", 100,"descripcion del producto","img/producto2.jpg"));
stockProductos.push(producto1)
let producto2 = (new Producto(2,"fideo", 200,"descripcion del producto","img/producto2.jpg"));
stockProductos.push(producto2)
let producto3 = (new Producto(3,"pan", 300,"descripcion del producto","img/producto2.jpg"));
stockProductos.push(producto3)
let producto4 = (new Producto(4,"alfajor", 400,"descripcion del producto","img/producto2.jpg"));
stockProductos.push(producto4)
let producto5 = (new Producto(5,"gaseosa", 500,"descripcion del producto","img/producto2.jpg"));
stockProductos.push(producto5)

// //variables de las compras
//  let envio = 200
//  let nuevoPrecio = 0
//  let nuevoPrecioEnvio = 0

//  //FUNCIONES



//  //Funciones de compra
// function suma(a,b){
//     let precioMasIva = a + b
//     return precioMasIva 
// }
// function iva (x){
//    let precioIva = x * 0.21
//    return  precioIva
// }

// //switch de compra
// function empezarCompra(){
//     let bandera = parseInt(prompt(`Ingrese el número de la opción que desea comprar:`))
//     let envio1 = prompt("Desea que le enviemos el producto? Si/No")
    
//     switch (bandera){
//         case 1:
//             nuevoPrecio = suma(producto1.precio,iva(producto1.precio));
//             if(envio1 === "Si"){ 
//                 nuevoPrecioEnvio = suma(nuevoPrecio,envio)
//                 mostrar(nuevoPrecioEnvio)
//             }
//             if(envio1 === "No"){
//                 mostrar(nuevoPrecio)
//             }
//             break;
//         case 2:
//             nuevoPrecio = suma(producto2.precio,iva(producto2.precio))
//         if(envio1 === "Si"){ 
//             nuevoPrecioEnvio = suma(nuevoPrecio,envio)
//             mostrar(nuevoPrecioEnvio)
//         }
//         if(envio1 === "No"){
//             mostrar(nuevoPrecio)
//             break;
//         }
//         break;
//         case 3:
//             nuevoPrecio = suma(producto3.precio,iva(producto3.precio))
//         if(envio1 === "Si"){ 
//             nuevoPrecioEnvio = suma(nuevoPrecio,envio)
//             mostrar(nuevoPrecioEnvio)
//         }
//         if(envio1 === "No"){
//             mostrar(nuevoPrecio)
//             break;
//         }
//         case 4:
//             nuevoPrecio = suma(producto4.precio,iva(producto4.precio))
//             if(envio1 === "Si"){ 
//                 nuevoPrecioEnvio = suma(nuevoPrecio,envio)
//                 mostrar(nuevoPrecioEnvio)
//             }
//             if(envio1 === "No"){
//                 mostrar(nuevoPrecio)
//             }
//             break;
           
//         case 5:
//             nuevoPrecio = suma(producto5.precio,iva(producto5.precio))
//         if(envio1 === "Si"){ 
//             nuevoPrecioEnvio = suma(nuevoPrecio,envio)
//             mostrar(nuevoPrecioEnvio)
//         }
//         if(envio1 === "No"){
//             mostrar(nuevoPrecio)
//         }
//         break;
//           }
//     }
// //FUNCIONES DE LISTA DE OPCIONES
// function mostrar (mensaje){
//    alert("Su precio es " + mensaje)
// }


// function mostrarCatalogo(){
//     alert(`Podrá ver nuestro catálogo en la consola:`)
//     for(const producto of productos){
//         producto.mostrarDatos()
// }
// }
// function filtrador(){ 
//     let a = parseInt(prompt("Ingrese valor maximo para filtrar"))
//     const baratos = productos.filter(producto => producto.precio < a)
//         console.log(baratos)
//     const caros = productos.filter(producto => producto.precio > a)
//         console.log(caros)
// }
// //function que permita al vendedor agregar un producto nuevo al catalogo
// function nuevoProducto(){
//     let productoIngresado = prompt("Ingrese el producto")
//     let precioIngresado = parseInt(prompt("Ingrese el precio"))
//     let productoCreado = new Producto(productos.length+1,productoIngresado, precioIngresado)
//     console.log(productoCreado)
//     productos.push(productoCreado)
// }

// //FUNCION LISTA DE OPCIONES
// function preguntarOpcion(){
//     let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
//                         1 - Ver catálogo de productos
//                         2 - Agregar un producto a nuestro catálogo 
//                         3 - Eliminar un producto de nuestro catálogo 
//                         4 - Inciar compra:
//                         5 - Filtrar por precio:
//                         0 - Para salir
//                         `))
//                         menu(opcion)
//                     }

//  let salir
// while(salir != true){
//                preguntarOpcion()   
//                }

// //switch de opciones
// function menu(opcionSeleccionada){
//     switch(opcionSeleccionada){
//     case 0:
//         salir = true
//         alert(`Gracias por visitarnos, vuelva pronto :D`)
//         break;
//     case 1:
//        mostrarCatalogo() 
//        break;
//     case 2:
//         nuevoProducto()
//     break;
//     case 3:
//         break;
//     case 4:
//     empezarCompra()
//             break;
//     case 5:

//         filtrador()
        
//         break;
// }
// }


// let divProductos = document.getElementById("productos")
// divProductos.setAttribute("class", "productosEstilos")
// function mostrarCatalogo(){
// productos.forEach((producto)=>{
//     let nuevoProducto = document.createElement("div")
//     nuevoProducto.innerHTML = `<article id="${producto.id}" class="card">
//                                     <h3 class="tituloCard">${producto.nombre}</h3>
//                                     <img src="${producto.imagen}" >
//                                     <div class="content">
//                                         <p class="precioCard">Precio: ${producto.precio}</p>
//                                         <a href="" target="blank">Agregar al carrito</a>
//                                     </div>
//                                 </article>`
//     divProductos.appendChild(nuevoProducto)
// })}
// function ocultarCatalogo(){
//     divProductos.innerHTML =""
// }


    
//Trabajo para el carrito


const contenedorProductos = document.getElementById(`contenedorProductos`)
contenedorProductos.setAttribute("class", "productosEstilos")
function mostrarCatalogo(){
stockProductos.forEach((producto) => {
    const div = document.createElement(`div`)
    div.classList.add(`producto`)
    div.innerHTML = `
    <article class="card">
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p> 
    <button id="agregar${producto.id}" class="buttonAgregar">Agregar <i class="<i class="bi bi-cart-fill"></i></button>
    </article>
     `
     contenedorProductos.appendChild(div)

     const boton = document.getElementById(`agregar${producto.id}`)
     boton.addEventListener(`click`, () => agregarAlCarrito(producto.id) )
})



  const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
  }} 

  function ocultarCatalogo(){
    contenedorProductos.innerHTML =""
}

  let mostrarCatalogoBtn = document.getElementById("verCatalogo")
  mostrarCatalogoBtn.addEventListener(`click`, mostrarCatalogo)
 
  let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
  ocultarCatalogoBtn.addEventListener(`click`, ocultarCatalogo)