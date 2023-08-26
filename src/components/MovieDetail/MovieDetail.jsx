// This should show all details including ALL genres for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.
// Base functionality does not require the movie details to load correctly after refresh of the browser.
// Hint : You can make a GET request for a specific movie. Remember req.params and :id?

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'

// MUI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from "@mui/material/CardActions";
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home'

function MovieDetail() {
  const history = useHistory()
  const dispatch = useDispatch()
  const params = useParams()

  const movie = useSelector((store) => store.singleMovie[0])

  useEffect(() => {
    console.log(`MovieDetail : ${params.id}`)
    dispatch({ type: 'FETCH_DETAILS', payload: params.id }) // payload: params.id ???
  }, [])

  const handleClick = () => {
    history.push('/')
  }



  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            My Movie List
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 8 }} maxWidth="xs">
      <Card key={movie}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                    <Typography>
                      {movie.description}
                      {movie.genre}  
                    </Typography>
                  </CardContent>


                </Card>
            <Button onClick={handleClick} variant="contained">Back</Button>
        </Container>
    </div>
  );
  // TODO : setup Redux dispatch

  // Display individual movie details **including ALL genres** 
    // DB = 'saga_movies_weekend
    // table = 'movies'
    // values = id, title, poster, description, **(genres later)

  // TODO: Back to List button, routes back to the Home/List Page
    
  // *** This would be a good one to refresh ***
  // STRETCH TODO: Allow the app to maintain on refresh our details page. Research the useParams hook for React Router.
}

export default MovieDetail