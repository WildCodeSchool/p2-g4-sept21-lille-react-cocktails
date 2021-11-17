import PropTypes from 'prop-types';
import CocktailCard from '../CocktailCard';
import './style.css';

export default function FavoritesView({ favorites, setFavorites }) {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="cardContainer">
        {favorites.map((favorite) => {
          return (
            <>
              <CocktailCard
                favorites={favorites}
                setFavorites={setFavorites}
                strDrink={favorite.name}
                strDrinkThumb={favorite.picture}
              />
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
