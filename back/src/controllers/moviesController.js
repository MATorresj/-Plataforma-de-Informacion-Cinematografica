const moviesService = require("../services/moviesService");
module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await moviesService.movies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    createMovies: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body;
            const newMovie = await moviesService.postMovies({ title, year, director, duration, genre, rate, poster });
            res.status(201).send({
                message: "Película creada con éxito.",
                movie: newMovie
            });
        } catch (error) {
            res.status(500).send("Error al crear la película.");
        }
    }   
};
