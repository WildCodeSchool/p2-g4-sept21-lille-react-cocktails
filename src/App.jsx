import { useState } from 'react';

import CocktailView from './components/CocktailView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [searchBarInputUser, setSearchBarInputUser] = useState('');
  return (
    <>
      <Header
        displaySearch
        searchBarInputUser={searchBarInputUser}
        setSearchBarInputUser={setSearchBarInputUser}
      />
      <CocktailView searchBarInputUser={searchBarInputUser} />
      <Footer />
    </>
  );
}

export default App;
