import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Container from "@mui/material/Container"

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Header />
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/detail/:id" exact>
          <MovieDetail />
        </Route>
      </Router>
      <Footer />
    </Container>
  );
}


export default App;
