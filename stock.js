let stockProductos = [
    {id: 1, nombre: "Glasses Elegant", tipo: "gafas", cantidad: 1, desc: "", precio: 1200, talle: "L", img: '../img/gafas1.jpg'},
    {id: 2, nombre: "Vich", tipo: "gafas", cantidad: 1, desc: "", precio: 1100, talle: "L", img: '../img/gafas2.jpg'},
    {id: 3, nombre: "Elegant Sport", tipo: "gafas", cantidad: 1, desc: "", precio: 1200, talle: "M", img: '../img/gafas3.jpg'},
    
]

localStorage.setItem("productos", JSON.stringify(productos));
