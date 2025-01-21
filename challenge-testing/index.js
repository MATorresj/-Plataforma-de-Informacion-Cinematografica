class CarritoCompra {
    constructor(){
        this.productos = []
    }
    agregarProducto(producto) {
        if (!producto || typeof producto !== 'object') {
            throw new Error('El producto debe ser un objeto.');
        }
        this.productos.push(producto);
    }
    calcularTotal() {
        let total = 0;
        for (const producto of this.productos){
            total += producto.precio * producto.cantidad;
        }
        return total;
    }
    aplicarDescuento(porcentaje){
        if (!porcentaje || typeof porcentaje !== 'number') {
            throw new Error('El porcentaje debe ser un numero.');
        }
        let descuento = (porcentaje/100) * this.calcularTotal();
        let valorFinal = this.calcularTotal() - descuento;
        return valorFinal;
    }
}
module.exports = CarritoCompra;