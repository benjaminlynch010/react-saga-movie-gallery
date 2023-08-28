import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// MUI Imports
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: "FETCH_DETAILS" });
  }, []);

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
<>  
      <Container sx={{ py: 2 }} maxWidth="lg">
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: "150%",
                  }}
                  image={movie.poster}
                  alt={movie.title} 
                  onClick={() => handleClick(movie.id)}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
</>
  );
}

export default MovieList;
