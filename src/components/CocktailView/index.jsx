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
    if (statsSearchBar) {
      console.log(statsSearchBar);
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchBarInputUser}`
        )
        .then(({ data }) => {
          setCocktails(data.drinks);
        });
    }
    setStatsSearchBar(false);
  }, [statsSearchBar]);

  return (
    <div>
      <p>DEBUG:{searchBarInputUser}</p>

      <div className="cardContainer">
        {cocktails.map((data) => {
          return <CocktailCard key={data.idDrink} {...data} />;
        })}
      </div>
    </div>
  );
}

CocktailView.propTypes = {
  searchBarInputUser: PropTypes.string,
  statsSearchBar: PropTypes.bool,
  setStatsSearchBar: PropTypes.bool,
};
CocktailView.defaultProps = {
  searchBarInputUser: '',
  statsSearchBar: false,
  setStatsSearchBar: false,
};
