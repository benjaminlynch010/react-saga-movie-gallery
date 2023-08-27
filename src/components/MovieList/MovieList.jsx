import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import Copyright from "../Copyright/Copyright";

// MUI Imports
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
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO wrap index.js with theme setup?  double check first
const defaultTheme = createTheme();

function MovieList() {
  const history = useHistory()
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" })
    dispatch({ type: "FETCH_DETAILS" })
  }, []);

  const handleClick = (id) => {
    // TODO : Need a route back to main list on card
    history.push(`/detail/${id}`)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            My Movie List
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Movie Gallery
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {movies.map((movie) => (
              <Grid key={movie.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h2">
                        {movie.title}
                      </Typography>
                    </CardContent>
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '150%',
                    }}
                    image={movie.poster}
                    alt={movie.title}
                  />
                  <CardActions>
                    {/* TODO: Route to Movie Details */}
                    <Button 
                    variant="contained" 
                    sx={{ width: '100%'}}
                    onClick={() => handleClick(movie.id)}>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
Fin
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        Special Thanks to the Real Ones of Iolite
        <br></br>
        And to the staff at Prime Academy
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );


}

export default MovieList;
