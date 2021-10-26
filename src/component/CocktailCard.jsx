import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CocktailCard() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
      .then(({ data }) => {
        setCocktails(data.drinks);
      });
  }, []);

  return (
    <div>
      <ul>
        {' '}
        {cocktails.map((result) => {
          return <img src={result.strDrinkThumb} alt="" />;
        })}
      </ul>
    </div>
  );
}
