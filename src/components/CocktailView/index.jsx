import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailCard from '../CocktailCard';
import './style.css';

export default function CocktailView({
  searchBarInputUser,
  statsSearchBar,
  setStatsSearchBar,
  favorites,
  setFavorites,
}) {
  const [cocktails, setCocktails] = useState([]);
  let getArray = [];
  getArray = JSON.parse(localStorage.getItem('favorites')) || [];
  useEffect(() => {
    setFavorites([...getArray]);
  }, []);

  useEffect(() => {
    if (statsSearchBar) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchBarInputUser}`
        )
        .then(({ data }) => {
          setCocktails(data.drinks);
        })
        .catch(() => {
          window.alert('No cocktail found please try again !');
          window.location.reload();
        });
    }
    setStatsSearchBar(false);
  }, [statsSearchBar]);

  return (
    <div>
      <div className="cardContainer">
        {cocktails.map((data) => {
          const path = `detail/${data.strDrink}`;
          return (
            <>
              <Link className="displayLink" to={path}>
                <CocktailCard
                  favorites={favorites}
                  setFavorites={setFavorites}
                  key={data.idDrink}
                  {...data}
                />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

CocktailView.propTypes = {
  searchBarInputUser: PropTypes.string,
  statsSearchBar: PropTypes.bool,
  setStatsSearchBar: PropTypes.func,
  favorites: PropTypes.arrayOf(PropTypes.string),
  setFavorites: PropTypes.func,
};
CocktailView.defaultProps = {
  searchBarInputUser: '',
  statsSearchBar: false,
  setStatsSearchBar: () => {},
  favorites: [],
  setFavorites: () => {},
};
