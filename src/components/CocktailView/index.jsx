import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import CocktailCard from '../CocktailCard';

import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function CocktailView({
  searchBarInputUser,
  statsSearchBar,
  setStatsSearchBar,
  favorites,
  setFavorites,
}) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (statsSearchBar) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchBarInputUser}`
        )
        .then(({ data }) => {
          if (Array.isArray(data.drinks)) setCocktails(data.drinks);
          else throw new Error('Failed API call');
        })
        .catch(() => {
          toast.error('No Cocktail found !', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
