import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CocktailCard from '../CocktailCard';
import './style.css';

export default function FavoritesView({ favorites, setFavorites }) {
  return (
    <>
      <div className="cardContainer">
        {favorites.map((favorite) => {
          const path = `detail/${favorite.name}`;
          return (
            <>
              <Link className="displayLink" to={path}>
                <CocktailCard
                  favorites={favorites}
                  setFavorites={setFavorites}
                  strDrink={favorite.name}
                  strDrinkThumb={favorite.picture}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

FavoritesView.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string),
  setFavorites: PropTypes.func,
};

FavoritesView.defaultProps = {
  favorites: [],
  setFavorites: () => {},
};
