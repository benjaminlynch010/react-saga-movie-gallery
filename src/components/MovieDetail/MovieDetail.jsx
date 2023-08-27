import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'

// MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
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
    <Card xs={4} sx={{ display: "flex", flexDirection: "column" }}>
      <CardHeader component={Typography} title={movie.title} subheader={genre.genres}/>
      <CardContent xs={4} sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          sx={{
            height: "150",
            title: movie.title,
            margin: "20px"
          }}
          image={movie.poster}
          alt={movie.title}
        />
        <Typography>{movie.description}</Typography>
      </CardContent>
      <Button onClick={handleClick}>Back To List</Button>
    </Card>
  </Container>
);

}

export default MovieDetail