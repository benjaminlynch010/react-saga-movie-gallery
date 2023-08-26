// This should show all details including ALL genres for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.
// Base functionality does not require the movie details to load correctly after refresh of the browser.
// Hint : You can make a GET request for a specific movie. Remember req.params and :id?

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'

// MUI
import Typography from '@mui/material/Typography';


function MovieDetail() {
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    console.log(`MovieDetail : ${params.id}`)
    dispatch({ type: 'FETCH_DETAILS', payload: params.id })
  }, [])


  return (
    <div>
      <Typography variant="h4">Movie Details</Typography>

    </div>
    )
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