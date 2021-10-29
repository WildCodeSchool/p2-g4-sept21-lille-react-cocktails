import { useState } from 'react';

import CocktailView from './components/CocktailView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [searchBarInputUser, setSearchBarInputUser] = useState('');
  const [statsSearchBar, setStatsSearchBar] = useState(false);
  return (
    <>
      <Header
        displaySearch
        searchBarInputUser={searchBarInputUser}
        setSearchBarInputUser={setSearchBarInputUser}
        statsSearchBar={statsSearchBar}
        setStatsSearchBar={setStatsSearchBar}
      />
      <CocktailView
        searchBarInputUser={searchBarInputUser}
        statsSearchBar={statsSearchBar}
        setStatsSearchBar={setStatsSearchBar}
      />
      <Footer />
    </>
  );
}

export default App;
