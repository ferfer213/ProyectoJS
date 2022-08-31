//Productos del kiosco online
swal("Bienvenido al Kiosco Diegote");

class Producto {
    constructor(id,nombre, precio,desc,cantidad,imagen,categoria) {
        this.id      = parseFloat(id)
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.cantidad= parseFloat(cantidad)
        this.desc    = desc
        this.img     = imagen
        this.categoria = categoria.toUpperCase();
    }

}





// let producto1 = (new Producto(1,"arroz", 300,"descripcion del producto",1,"img/alimentos.jpg","alimento"));
// stockProductos.push(producto1)
// let producto2 = (new Producto(2,"fideo", 350,"descripcion del producto",1,"img/alimentos.jpg","alimento"));
// stockProductos.push(producto2)
// let producto3 = (new Producto(3,"pan", 450,"descripcion del producto",1,"img/alimentos.jpg","alimento"));
// stockProductos.push(producto3)
// let producto4 = (new Producto(4,"guaymallen", 50,"descripcion del producto",1,"img/golosinas.jpg","golosina"));
// stockProductos.push(producto4)
// let producto5 = (new Producto(5,"coca cola", 170,"descripcion del producto",1,"img/bebidas.jpg","bebida"));
// stockProductos.push(producto5)

let stockProductos = [];

    fetch("productos.json",{headers: {
        'Access-Control-Allow-Origin': '*'
      }})
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
        for(let producto of data){
            let productoNuevo = (producto.id, producto.nombre, producto.precio, producto.cantidad, producto.desc, producto.imagen, producto.categoria)
            stockProductos.push(productoNuevo)
        }})
        

           










//PRODUCTOS

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
    })}
    
    function ocultarCatalogo(){
       
        contenedorProductos.innerHTML = ""
       
    }


    mostrarCatalogo()





    
//const del CARRITO 

let carrito =[];

const fcompra = document.getElementById(`botonFinalizarCompra`)

const vaciarCarrito = document.getElementById(`vaciarCarrito`)

const contenedorCarrito = document.getElementById(`modal-body`)

const precioTotal = document.getElementById (`precioTotal`)

const contadorCarrito = document.getElementById(`contadorCarrito`)

document.addEventListener(`DOMContentLoaded`,()=>{
    if(localStorage.getItem(`carrito`)){
        carrito = JSON.parse(localStorage.getItem(`carrito`)) 
        actualizarCarrito()
    }
    else()=>{
        localStorage.removeItem(`carrito`)
        actualizarCarrito
    }
})

// document.addEventListener(`DOMContentLoaded`,()=>{
//     localStorage.getItem(`carrito`) ?  carrito = JSON.parse(localStorage.getItem(`carrito`)) && actualizarCarrito() : localStorage.removeItem(`carrito`) && actualizarCarrito()
    
// }) ESTA FUNCION ES LA QUE APARECE ARRIBA PERO CUANDO LA COLOCO ME APARECE ERROR EN LA LINEA 103, CON EL SOME



 //CARRITO   

  const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){
        const prod = carrito.map(prod => {
            prod.id === prodId &&
                prod.cantidad++
            }
        )
    }

    else{
    const item = stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    }
    actualizarCarrito()
    
  }






  const actualizarCarrito = ()=>{

    contenedorCarrito.innerHTML = ""

    carrito.forEach((productoCarrito) =>{
        const div = document.createElement(`div`)
        div.className = (`modal-body`)
        div.innerHTML = `
        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productoCarrito.img}" alt="${productoCarrito.nombre}">
                <div class="card-body">
                        <h4 class="card-title">${productoCarrito.nombre}</h4>
                    
                        <p class="card-text">$${productoCarrito.precio*productoCarrito.cantidad}</p>
                        <p>Cantidad:${productoCarrito.cantidad}</p>
                        <button onclick="sumarAlCarrito(${productoCarrito.cantidad})" class= "btn btn-success" id="botonAgregar"><i class="fas fa-plus"></i></button><button onclick="eliminarDelCarrito(${productoCarrito.id})" class= "btn btn-danger" id="botonRestar"><i class="fas fa-minus"></i></i></button>
                        <button onclick="eliminarDelCarrito(${productoCarrito.id})" class= "btn btn-dark" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            
            
            </div>`
        
        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acum,productoCarrito)=> acum + productoCarrito.precio*productoCarrito.cantidad, 0)

    fcompra.addEventListener(`click`,()=>{
        carrito.length <= 0 ? true : false
        carrito.length ? swal({
            title: 'Compra realizada',
            icon: 'success',
            confirmButtonColor: 'green',
            text: `Muchas gracias por su compra ha adquirido nuestros productos. `,
            footer: `<p> nos comprometemos que en el plazo de 48hs nos comunicaremos con usted</p>`
        })  : swal({
            title: 'Compra no realizada',
            icon: 'info',
            text: `La compra no ha sido realizada! Atención no posee productos en el carrito`,
            confirmButtonColor: 'green',
            timer:4500
        }) 
    
    })
  }
  


//FILTROS AUN EN ESTADO DE PRUEBA
const mayorA = document.getElementById(`mayorA`)
const menorA = document.getElementById(`menorA`)

mayorA.addEventListener(`click`,()=>{
    stockProductos.sort((a, b)=>{return a.precio - b.precio});
    ocultarCatalogo()
    mostrarCatalogo()
       
    })

menorA.addEventListener(`click`,()=>{
    stockProductos.sort((a, b)=>{return b.precio - a.precio});
    ocultarCatalogo()
    mostrarCatalogo()
       
    })
   
//Botones Carrito (el sumar y restar aun no encuentro la forma de hacerlo)


    const sumarAlCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id===prodId)
        carrito.indexOf(item)
        prodId.cantidad++
       actualizarCarrito()
    }
    
    
     const eliminarDelCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id === prodId)
        const indice = carrito.indexOf(item)
        carrito.splice(indice,1)
        actualizarCarrito()
     }
    
     vaciarCarrito.addEventListener(`click`, () => {
        carrito.length = 0
        localStorage.setItem(`carrito`,JSON.stringify(carrito))
        actualizarCarrito()
    })