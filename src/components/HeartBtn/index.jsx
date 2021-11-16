import { PropTypes } from 'prop-types';
import Heart from '../../assets/coeurvide.png';
import fullHeart from '../../assets/coeurjaune.png';
import './style.css';

export default function Heartbtn({ cocktail, favorites, setFavorites }) {
  const addFav = () => {
    const array = favorites;
    let addArray = true;
    array.map((favorite, index) => {
      if (favorite.name === cocktail.name) {
        addArray = false;
        return array.splice(index, 1);
      }
      return array;
    });
    if (addArray) {
      array.push(cocktail);
    }
    setFavorites([...array]);

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  return (
    <>
      {favorites.some((favorite) => favorite.name === cocktail.name) ? (
        <button
          type="button"
          className="fullHeart"
          onClick={(e) => {
            e.preventDefault();
            addFav();
          }}
        >
          <img src={fullHeart} alt="Icone ajouter aux favoris" />
        </button>
      ) : (
        <button
          type="button"
          className="heart"
          onClick={(e) => {
            e.preventDefault();
            addFav();
          }}
        >
          <img src={Heart} alt="Icone enlever des favoris" />
        </button>
      )}
    </>
  );
}

Heartbtn.propTypes = {
  cocktail: PropTypes.shape,
  favorites: PropTypes.arrayOf(PropTypes.string),
  setFavorites: PropTypes.func,
};

Heartbtn.defaultProps = {
  cocktail: {},
  favorites: [],
  setFavorites: () => {},
};
