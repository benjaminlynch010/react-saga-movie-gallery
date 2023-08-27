import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'

// MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';

function MovieDetail() {
  const history = useHistory()
  const params = useParams()
  const dispatch = useDispatch()

  let id = ((params.id) - 1)
  let movie = useSelector((store) => store.movies[(id)])
  let genre = useSelector((store) => store.genres[(id)])
 

  const handleClick = () => {
    history.push('/')
  }

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" })
    dispatch({ type: "FETCH_DETAILS" })
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