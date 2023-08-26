import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";

// MUI Imports
import {
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const styles = {
    media : {

    }
  }

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <Typography>Movie List</Typography>
      <Container className="movies">
        <Paper>
          <Grid container spacing={8}>
            {movies.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{movie.title}</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={movie.poster}
                    alt={movie.title}
                    style={styles.media}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </main>
  );
  

}

export default MovieList;
