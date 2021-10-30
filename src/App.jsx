import CocktailView from './components/CocktailView';
import CocktailDetail from './components/CocktailDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div className="app">
      <Header displaySearch />
      <CocktailDetail />
      <CocktailView />
      <Footer />
    </div>
  );
}

export default App;
