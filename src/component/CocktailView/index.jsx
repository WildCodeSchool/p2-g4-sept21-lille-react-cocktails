import { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailCard from '../CocktailCard';
import './style.css';

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

  return (
    <div>
      <div className="fakeHeader">
        <p>HEADER</p>
      </div>
      <div className="cardContainer">
        {cocktails.map((data) => {
          return <CocktailCard key={data.idDrink} {...data} />;
        })}
      </div>
    </div>
  );
}
