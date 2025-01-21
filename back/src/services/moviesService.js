const Pelicula = require("../models/Pelicula");

module.exports = {
    movies: async () => {
        try {
            const peliculas = await Pelicula.find();
            return peliculas;
        } catch (error) {
            throw new Error("Error al obtener las películas");
        }
    },
    postMovies: async (movieData) => {
        try {
            const newMovie = new Pelicula(movieData);
            await newMovie.save();
            return newMovie;
        } catch (error) {
            throw new Error ("Error al crear la pelicula");
        }
    }
};
