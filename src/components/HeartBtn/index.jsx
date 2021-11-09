import { PropTypes } from 'prop-types';

import Heart from '../../assets/coeurvide.png';
import fullHeart from '../../assets/coeurtoutjaune.png';
import './style.css';

export default function Heartbtn({ cocktailName, favorites, setFavorites }) {
  const addFav = () => {
    const array = favorites;

    let addArray = true;
    array.map((favorite, index) => {
      if (favorite === cocktailName) {
        addArray = false;

        return array.splice(index, 1);
      }
      return array;
    });
    if (addArray) {
      array.push(cocktailName);
    }
    setFavorites([...array]);

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  return (
    <>
      {favorites.includes(cocktailName) ? (
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
  cocktailName: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.string),
  setFavorites: PropTypes.func,
};

Heartbtn.defaultProps = {
  cocktailName: '',

  favorites: [],
  setFavorites: () => {},
};
