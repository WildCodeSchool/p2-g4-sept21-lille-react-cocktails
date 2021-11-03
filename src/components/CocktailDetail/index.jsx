import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

export default function CocktailDetail() {
  const [cocktail, setCocktail] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(({ data }) => {
        setCocktail(data.drinks[0]);
      });
  }, []);

  const ingredientsListing = Object.keys(cocktail)
    .filter((key) => {
      return key.includes('Ingredient') && cocktail[key] !== null;
    })
    .map((key) => {
      return cocktail[key];
    });
  const measuresListing = Object.keys(cocktail)
    .filter((key) => {
      return key.includes('Measure') && cocktail[key] !== null;
    })
    .map((key) => {
      return cocktail[key];
    });
  const listing = [];
  for (let i = 0; i < measuresListing.length; i += 1) {
    listing.push(`${ingredientsListing[i]} : ${measuresListing[i]}`);
  }
  return (
    <section className="cocktailDetail">
      <div className="bottomRight">
        <h2> {cocktail.strDrink} </h2>
        <p>{cocktail.strInstructions}</p>
      </div>
      <div className="topLeft">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <p>Ingredients :</p>
        <ul>
          {listing.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
