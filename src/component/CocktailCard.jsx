import axios from 'axios';
import { useState } from 'react';

export default function CocktailCard() {
  const [cocktails, setCocktails] = useState([]);
  axios
    .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(({ data }) => {
      setCocktails(data.drinks);
    });
  return (
    <div>
      <ul>
        {' '}
        {cocktails.map((result) => {
          console.log(result);
          return <li>{result.strCategory}</li>;
        })}
      </ul>
    </div>
  );
}
