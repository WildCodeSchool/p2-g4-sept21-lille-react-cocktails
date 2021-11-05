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
}) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    let apiUrl = '';
    if (statsSearchBar) {
      apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchBarInputUser}`;
    } else {
      apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;
    }

    if (statsSearchBar || !cocktails.length) {
      axios
        .get(apiUrl)
        .then(({ data }) => {
          if (!data.drinks) {
            throw Error('No cocktails found');
          }
          setCocktails(data.drinks);
        })
        .catch(() => {
          window.alert('No cocktail found please try again !');
        })
        .finally(() => {
          setStatsSearchBar(false);
        });
    }
  }, [statsSearchBar]);

  return (
    <div>
      <div className="cardContainer">
        {cocktails
          .sort(() => Math.random() - 0.5)
          .map((data) => {
            const path = `detail/${data.strDrink}`;
            return (
              <Link className="displayLink" to={path}>
                <CocktailCard key={data.idDrink} {...data} />
              </Link>
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
};
CocktailView.defaultProps = {
  searchBarInputUser: '',
  statsSearchBar: false,
  setStatsSearchBar: () => {},
};
