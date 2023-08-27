// This should show all details including ALL genres for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.
// Base functionality does not require the movie details to load correctly after refresh of the browser.
// Hint : You can make a GET request for a specific movie. Remember req.params and :id?

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MovieDetail() {
  const history = useHistory()
  const params = useParams()

  let id = ((params.id) - 1)
  let movie = useSelector((store) => store.movies[(id)])
  let genre = useSelector((store) => store.genres[(id)])

  const handleClick = () => {
    history.push('/')
  }

  useEffect(() => {

  }, [])

return (
  <Container>
  <Grid container spacing={2}>
    <Grid xs={8}>
      <Card xs={4} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5">{movie.title}</Typography>
        <Typography>Genre : {genre.genres}</Typography>
      </Card>
      <Paper sx={{ display: "flex", flexDirection: "row" }}>
        <Card xs={4} sx={{ display: "flex" }}>
          <CardMedia
            component="div"
            sx={{
              height: "100%",
              width: "100%",
              m: "1%",
            }}
            image={movie.poster}
            alt={movie.title}
            />
          <CardContent>
            <Typography>{movie.description}</Typography>
          </CardContent>
            <Button onClick={handleClick}>Back To List</Button>
        </Card>
      </Paper>
    </Grid>
  </Grid>
</Container>
);

}

export default MovieDetail