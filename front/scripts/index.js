const renderizarTarjetas = require("./renderCards");
const axios = require("axios");
const url = "http://localhost:3000/movies"
const fetchData = async()=>{
    try{
        const response = await axios.get(url)
        renderizarTarjetas(response.data)
    } catch (error){
        alert("Ha ocurrido un error: " + error);
    }
}
fetchData();