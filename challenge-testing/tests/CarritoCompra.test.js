const CarritoCompra = require("../index")

describe("Testeo de la clase CarritoCompra", () => {
    let carrito;
    let producto1;
    let producto2;

    beforeEach(() => {
        carrito = new CarritoCompra();
        producto1 = {nombre: "manzana", precio: 3, cantidad: 5};
        producto2 = {nombre: "sandia", precio: 7, cantidad: 3};
    });

    it("Debe tener un constructor definido", () => {
        expect(typeof CarritoCompra.constructor).toBe('function');
    });

    it("Debe inicializar el carrito vacío", () =>{
        expect(carrito.productos).toEqual([]);
    });

    it("Debe tener el método agregarProducto definido", () => {
        expect(typeof carrito.agregarProducto).toBe('function');
    });

    it("Debe agregar productos al carrito", () =>{
        carrito.agregarProducto(producto1);
        expect(carrito.productos).toContainEqual(producto1);
    });

    it("Debe lanzar un error si no se pasa ningún argumento a agregarProducto", () => {
        expect(() => carrito.agregarProducto()).toThrow('El producto debe ser un objeto.');
    });
    
    it("Debe lanzar un error si el argumento pasado a agregarProducto no es un objeto", () => {
        expect(() => carrito.agregarProducto('no es un objeto')).toThrow('El producto debe ser un objeto.');
        expect(() => carrito.agregarProducto(123)).toThrow('El producto debe ser un objeto.');
        expect(() => carrito.agregarProducto(null)).toThrow('El producto debe ser un objeto.');
    });

    it("Debe tener el método calcularTotal definido", () => {
        expect(typeof carrito.calcularTotal).toBe('function');
    });

    it("Debe calcular el total correctamente", () =>{

        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(36);
    });

    it("Debe retornar un valor de tipo numero", () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        const total = carrito.calcularTotal();
        expect(typeof total).toBe('number');
    })

    it("Debe tener el método aplicarDescuento definido", () => {
        expect(typeof carrito.aplicarDescuento).toBe('function');
    });

    it("Debe lanzar un error si no se pasa ningún argumento a aplicarDescuento", () => {
        expect(() => carrito.aplicarDescuento()).toThrow('El porcentaje debe ser un numero.');
    });
    
    it("Debe lanzar un error si el argumento pasado a aplicarDescuento no es un numero", () => {
        expect(() => carrito.aplicarDescuento('no es un numero')).toThrow('El porcentaje debe ser un numero.');
        expect(() => carrito.aplicarDescuento({})).toThrow('El porcentaje debe ser un numero.');
        expect(() => carrito.aplicarDescuento(null)).toThrow('El porcentaje debe ser un numero.');
    });

    it("Debe aplicar el descuento correctamente", () =>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(35)).toBe(23.4);
    });
});