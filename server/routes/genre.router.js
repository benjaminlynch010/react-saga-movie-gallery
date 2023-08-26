const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
//   res.sendStatus(500)
// });

router.get('/:id', (req, res) => {
  const queryText = 'SELECT * FROM movies WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { 
      console.log('Sending', result.rows)
      res.send(result.rows); 
    })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
});
module.exports = router;