import PropTypes from 'prop-types';
import HeartBtn from '../HeartBtn';
import './style.css';

export default function CocktailCard({
  strDrink,
  strDrinkThumb,
  favorites,
  setFavorites,
}) {
  return (
    <div>
      <div className="mainCard">
        <div className="imgCard">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <h2 className="titleCard">{strDrink}</h2>
        <HeartBtn
          cocktail={{ name: strDrink, picture: strDrinkThumb }}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </div>
  );
}

CocktailCard.propTypes = {
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.string),
  setFavorites: PropTypes.func,
};
CocktailCard.defaultProps = {
  strDrink: '',
  strDrinkThumb: '',
  favorites: [],
  setFavorites: () => {},
};
