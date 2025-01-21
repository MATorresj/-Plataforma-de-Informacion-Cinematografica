const contenedorTarjetas = document.querySelector('.contenedor-tarjetas');
const renderizarTarjetas = tempData =>{
    const tarjetasHTML = tempData.map(pelicula => `
    <div class="tarjeta">
    <img src="${pelicula.poster}" class="tarjetaImgTop" alt="Poster de ${pelicula.title}">
    <div class="tarjeta-body">
        <h5 class="tarjeta-titulo">${pelicula.title}</h5>
        <p class="tarjeta-texto">Año: ${pelicula.year}</p>
        <p class="tarjeta-texto">Director: ${pelicula.director}</p>
        <p class="tarjeta-texto">Duración: ${pelicula.duration}</p>
        <p class="tarjeta-texto">Género: ${pelicula.genre.join(', ')}</p>
        <p class="tarjeta-texto">Calificación: ${pelicula.rate}</p>
    </div>
    </div>
    `).join('');
    contenedorTarjetas.innerHTML = tarjetasHTML;
}
module.exports = renderizarTarjetas;