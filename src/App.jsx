import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import RandomCocktailView from './components/RandomCocktailView';
import CocktailView from './components/CocktailView';
import CocktailDetail from './components/CocktailDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import FavoritesView from './components/FavoritesView';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchBarInputUser, setSearchBarInputUser] = useState('');
  const [statsSearchBar, setStatsSearchBar] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  let getArray = [];
  getArray = JSON.parse(localStorage.getItem('favorites')) || [];
  useEffect(() => {
    setFavorites([...getArray]);
  }, []);
  return (
    <Router>
      <Header
        searchBarInputUser={searchBarInputUser}
        setSearchBarInputUser={setSearchBarInputUser}
        statsSearchBar={statsSearchBar}
        setStatsSearchBar={setStatsSearchBar}
        searchCount={searchCount}
        setSearchCount={setSearchCount}
      />
      <Switch>
        <Route exact path="/">
          {searchCount === 0 ? (
            <RandomCocktailView
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ) : (
            <CocktailView
              searchBarInputUser={searchBarInputUser}
              statsSearchBar={statsSearchBar}
              setStatsSearchBar={setStatsSearchBar}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Route>
        <Route path="/detail/:cocktailName">
          <CocktailDetail setStatsSearchBar={setStatsSearchBar} />
        </Route>
        <Route path="/favorites">
          <FavoritesView favorites={favorites} setFavorites={setFavorites} />
        </Route>
      </Switch>
      <ToastContainer
        // theme="dark"
        limit={2}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </Router>
  );
}

export default App;
