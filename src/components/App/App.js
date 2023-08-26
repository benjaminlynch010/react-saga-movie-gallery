import {HashRouter as Router, Route} from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/detail/:id" exact>
          <MovieDetail />
        </Route>

        {/* <Route path="/movie">
          <Movie />
        </Route> */}

      </Router>
    </div>
  );
}


export default App;
