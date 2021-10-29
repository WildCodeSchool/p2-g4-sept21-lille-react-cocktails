import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailCard from '../CocktailCard';
import './style.css';

export default function CocktailView() {
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
      <div className="cardContainer">
        {cocktails.map((data) => {
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
