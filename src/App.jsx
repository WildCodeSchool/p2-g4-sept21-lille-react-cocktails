import CocktailView from './components/CocktailView';
import CocktailDetail from './components/CocktailDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header displaySearch />
      <CocktailDetail />
      <CocktailView />
      <Footer />
    </>
  );
}

export default App;
