const dbConnection = require("../data/db");

const controllers = {

    index: function (req, res) {

        const sqlQuery = "SELECT * FROM movies";

        dbConnection.query(sqlQuery, (error, rows) => {
            if (error) {
                return res.status(500).json({ error: "Database Error", message: 'Errore di richiesta al DB' })
            }

            res.json(rows);
        })

    },

    show: function (req, res) {

        const id = Number(req.params.id);

        const sqlQueryMovie = "SELECT * FROM movies WHERE id = ?";
        const sqlQueryReviews = "SELECT reviews.name, reviews.vote, reviews.text FROM reviews WHERE movie_id = ?";

        dbConnection.query(sqlQueryMovie, [id], (error, movies) => {
            if (error) {
                return res.status(500).json({ error: "Database Error", message: 'Errore di richiesta al DB' });
            }

            if (movies.length === 0 || movies[0].id === null) {
                return res.status(404).json({ error: "Not Found", message: "Non è stato possibile trovare il film" });
            }

            const movie = movies[0];

            dbConnection.query(sqlQueryReviews, [id], (error, reviews) => {
                if (error) {
                    return res.status(500).json({ error: "Database Error", message: 'Errore di richiesta al DB' });
                }

                movie.reviews = reviews

                res.json(movie);
            });
        });
    }
}

module.exports = controllers;