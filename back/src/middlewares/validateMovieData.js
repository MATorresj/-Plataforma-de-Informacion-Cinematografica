function validateMovieData(req, res, next) {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const yearNumber = Number(year);
    if (!Number.isInteger(yearNumber) || yearNumber < 1000 || yearNumber > 9999) {
        return res.status(400).json({ error: "El año debe ser un número de 4 dígitos." });
    }

    if (rate < 0 || rate > 10) {
        return res.status(400).json({ error: 'La calificación debe estar entre 0 y 10' });
    }

    next();
}

module.exports = validateMovieData;