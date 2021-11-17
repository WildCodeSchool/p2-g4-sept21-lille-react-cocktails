import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Carousel from '../Carousel';

export default function CocktailDetail({ setStatsSearchBar }) {
  const { cocktailName } = useParams();
  const [cocktailDetails, setCocktaildetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      )
      .then(({ data }) => {
        setCocktaildetails(data.drinks[0]);
      });
    return setStatsSearchBar(true);
  }, []);

  const ingredientsListing = Object.keys(cocktailDetails)
    .filter((key) => {
      return key.includes('Ingredient') && cocktailDetails[key] !== null;
    })
    .map((key) => {
      return cocktailDetails[key];
    });
  const measuresListing = Object.keys(cocktailDetails)
    .filter((key) => {
      return key.includes('Measure') && cocktailDetails[key] !== null;
    })
    .map((key) => {
      return cocktailDetails[key];
    });
  const listing = [];
  for (let i = 0; i < measuresListing.length; i += 1) {
    listing.push(`${ingredientsListing[i]} : ${measuresListing[i]}`);
  }
  return (
    <section className="cocktailDetail">
      <h2> {cocktailDetails.strDrink} </h2>
      <div className="receipe">
        <Carousel
          key={cocktailDetails.id}
          instructionString={cocktailDetails.strInstructions}
        />
      </div>

      <div className="img">
        <img
          src={cocktailDetails.strDrinkThumb}
          alt={cocktailDetails.strDrink}
        />
      </div>
      <p className="ingredients">Ingredients :</p>

      <ul>
        {listing.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </section>
  );
}

CocktailDetail.propTypes = {
  setStatsSearchBar: PropTypes.func,
};
CocktailDetail.defaultProps = {
  setStatsSearchBar: () => {},
};
