const { Router } = require("express");
const  controlador = require("../controllers/moviesController");
const router =  Router();
const validateMovieData = require("../middlewares/validateMovieData");

router.get("/movies", controlador.getMovies)

router.post("/movies", validateMovieData, controlador.createMovies)

module.exports = router;