import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RandomCocktailView from './components/RandomCocktailView';
import CocktailView from './components/CocktailView';
import CocktailDetail from './components/CocktailDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

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
              getArray={getArray}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ) : (
            <CocktailView
              searchBarInputUser={searchBarInputUser}
              statsSearchBar={statsSearchBar}
              setStatsSearchBar={setStatsSearchBar}
              getArray={getArray}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Route>
        <Route path="/detail/:cocktailName">
          <CocktailDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
