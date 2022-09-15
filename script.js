//Productos del kiosco online
swal("Bienvenido al Kiosco Diegote");

class Producto {
    constructor(id,nombre, precio,cantidad,desc,imagen,categoria) {
        this.id      = id,
        this.nombre  = nombre.toUpperCase(),
        this.precio  = precio,
        this.cantidad= cantidad,
        this.desc    = desc,
        this.img     = imagen,
        this.categoria = categoria;
    }

}

let carrito =[];

let stockProductos = [];

const cargarStock = async () =>{
    const response = await fetch("productos.json")
    const data = await response.json()
    console.log(data)
    for(let producto of data){
            let productoNuevo = new Producto(producto.id, producto.nombre, producto.precio, producto.cantidad, producto.desc, producto.img, producto.categoria)
            stockProductos.push(productoNuevo)
         
    }}
    
    function ocultarCatalogo(){
       
        contenedorProductos.innerHTML = ""
            
        }

        cargarStock()
       


//PRODUCTOS

const contenedorProductos = document.getElementById(`contenedorProductos`)
contenedorProductos.setAttribute("class", "productosEstilos")


function mostrarCatalogo(params){
    
    params.forEach((producto) => {
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
    
    

    const mCatalogo = document.getElementById(`mostrarCatalogo`)
    
    function myFunction() {
        if (mCatalogo.style.display === "none") {
          mCatalogo.style.display = "block";
        } else {
          mCatalogo.style.display = "none";
        }
      }

    mCatalogo.addEventListener(`click`,()=>{ 
        ocultarCatalogo()
        mostrarCatalogo(stockProductos)
        myFunction()
    }
    )



    
//const del CARRITO 

const fcompra = document.getElementById(`botonFinalizarCompra`)

const vaciarCarrito = document.getElementById(`vaciarCarrito`)

const contenedorCarrito = document.getElementById(`modal-body`)

const precioTotal = document.getElementById (`precioTotal`)

const contadorCarrito = document.getElementById(`contadorCarrito`)


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
    const prod = carrito.map(prod => {
        prod.id =! prodId &&
            prod.cantidad + 1})
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
                    
                        <p class="card-text">$${productoCarrito.precio}</p>
                        <p>Cantidad:${productoCarrito.cantidad}</p>
                        <button onclick="sumarAlCarrito"  class= "btn btn-success" id="botonAgregar"><i class="fas fa-plus"></i></button><button onclick="eliminarDelCarrito(${productoCarrito.id})" class= "btn btn-danger" id="botonRestar"><i class="fas fa-minus"></i></i></button>
                        <button onclick="eliminarDelCarrito(${productoCarrito.id})" class= "btn btn-dark" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            
            
            </div>`
        
        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))

        console.log(productoCarrito.cantidad)
    })


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





 //CARRITO   

  






  
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acum,productoCarrito)=> acum + productoCarrito.precio*productoCarrito.cantidad, 0)

    fcompra.addEventListener(`click`,()=>{
        carrito.length <= 0 ? true : false
        carrito.length ?
        
        swal({
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
const alimento = document.getElementById(`alimentos`)      
const bebida = document.getElementById(`bebidas`) 
const golosina = document.getElementById(`golosinas`) 
const libreria = document.getElementById(`libreria`) 


mayorA.addEventListener(`click`,()=>{
    stockProductos.sort((a, b)=>{return a.precio - b.precio});
    ocultarCatalogo()
    mostrarCatalogo(stockProductos)
       
    })

menorA.addEventListener(`click`,()=>{
    stockProductos.sort((a, b)=>{return b.precio - a.precio});
    ocultarCatalogo()
    mostrarCatalogo(stockProductos)
       
    })

    alimento.addEventListener(`click`,()=>{
        
        const filter = stockProductos.filter((prod) => {return prod.categoria === "alimento"});
        ocultarCatalogo()
        mostrarCatalogo(filter)
        })
        
        
    

    bebida.addEventListener(`click`,()=>{
        const filter = stockProductos.filter((el) => {return el.categoria === "bebida"});
        ocultarCatalogo()
        mostrarCatalogo(filter)
        })
    

    golosina.addEventListener(`click`,()=>{
        const filter = stockProductos.filter((el) => {return el.categoria === "golosina"});
        ocultarCatalogo()
        mostrarCatalogo(filter)
        })
    
   
    libreria.addEventListener(`click`,()=>{
        const filter = stockProductos.filter((el) => {return el.categoria === "libreria"});
        ocultarCatalogo()
        mostrarCatalogo(filter)
    })

    
   
//Botones Carrito (el sumar y restar aun no encuentro la forma de hacerlo)
     const agregarUno = document.getElementById(`botonAgregar`)

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
        localStorage.setItem(`carrito`,JSON.stringify(carrito))
        actualizarCarrito()
     }
    
     vaciarCarrito.addEventListener(`click`, () => {
        carrito.length = 0
        localStorage.setItem(`carrito`,JSON.stringify(carrito))
        actualizarCarrito()
    })

   

    