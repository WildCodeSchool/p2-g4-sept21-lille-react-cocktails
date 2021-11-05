import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
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
            <RandomCocktailView />
          ) : (
            <CocktailView
              searchBarInputUser={searchBarInputUser}
              statsSearchBar={statsSearchBar}
              setStatsSearchBar={setStatsSearchBar}
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
