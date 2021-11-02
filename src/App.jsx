import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CocktailView from './components/CocktailView';
import CocktailDetail from './components/CocktailDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header displaySearch />
      <Switch>
        <Route exact path="/">
          <CocktailView />
        </Route>
        <Route path="/detail">
          <CocktailDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
