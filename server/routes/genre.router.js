const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const queryText = `
    SELECT movies.id, movies.title, STRING_AGG(genres.name, ', ') AS genres
    FROM "movies" 
    JOIN movies_genres ON movies.id=movies_genres.movie_id
    JOIN genres ON movies_genres.genre_id=genres.id
    GROUP BY movies.id, movies.title
    ORDER BY movies.id ASC;
  `
  pool.query(queryText)
    .then((result) => { 
      console.log('Sending', result.rows)
      res.send(result.rows); 
    })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
  const queryText = `
    SELECT movies.id, movies.title, STRING_AGG(genres.name, ', ') AS genres
    FROM "movies"
    WHERE movies.id=$1 
    JOIN movies_genres ON movies.id=movies_genres.movie_id
    JOIN genres ON movies_genres.genre_id=genres.id
    GROUP BY movies.id, movies.title
    ORDER BY movies.id ASC;
  `
  const params = req.body.id
  pool.query(queryText, [ params ])
  .then((result) => {
    console.log('Server getting', result.rows)
    res.send(result.rows)
  })
})

module.exports = router;