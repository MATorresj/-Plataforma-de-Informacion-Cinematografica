const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");

addButton.addEventListener("click", addHandler);
clearButton.addEventListener("click", clearHandler);

function addHandler(event) {
    event.preventDefault();
    
    const titleInput = document.getElementById("titleInput").value;
    const yearInput = document.getElementById("yearInput").value;
    const directorInput = document.getElementById("directorInput").value;
    const durationInput = document.getElementById("durationInput").value;
    const genreInput = document.getElementById("genreInput").value;
    const rateInput = document.getElementById("rateInput").value;
    const posterInput = document.getElementById("posterLink").value;

    axios.post("http://localhost:3000/movies", {
        title: titleInput,
        year: yearInput,
        director: directorInput,
        duration: durationInput,
        genre: genreInput,
        rate: rateInput,
        poster: posterInput
    })
    .then(response => {
        console.log('Respuesta:', response.data);
        alert("Película añadida con éxito");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Debes rellenar correctamente los datos del formulario.");
    });
}

function clearHandler(event) {
    event.preventDefault();

    const titleInput = document.getElementById("titleInput");
    const yearInput = document.getElementById("yearInput");
    const directorInput = document.getElementById("directorInput");
    const durationInput = document.getElementById("durationInput");
    const genreInput = document.getElementById("genreInput");
    const rateInput = document.getElementById("rateInput");
    const posterInput = document.getElementById("posterLink");

    if (!titleInput.value && !yearInput.value && !directorInput.value && !durationInput.value && !genreInput.value && !rateInput.value && !posterInput.value) {
        alert("No has completado ningún dato aún.");
    } else {
        alert("Limpiaste el formulario.");
        
        titleInput.value = "";
        yearInput.value = "";
        directorInput.value = "";
        durationInput.value = "";
        genreInput.value = "";
        rateInput.value = "";
        posterInput.value = "";
    }
}