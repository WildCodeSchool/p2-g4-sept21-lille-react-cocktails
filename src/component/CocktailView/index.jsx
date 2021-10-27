import { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailCard from '../CocktailCard';

export default function CocktailView() {
  const [cocktails, setCocktails] = useState([]);
  // const [result, setResult] = useState();

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
      .then(({ data }) => {
        setCocktails(data.drinks);
      });
  }, []);

  console.log(cocktails);
  return (
    <div>
      {cocktails.map((data) => {
        return <CocktailCard cocktails={data} />;
      })}
    </div>
  );
}
