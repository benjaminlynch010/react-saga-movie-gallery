import {HashRouter as Router, Route} from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/detail/:id" exact>
          <MovieDetail />
        </Route>
      </Router>
    </div>
  );
}


export default App;
