import PropTypes from 'prop-types';
// import { useEffect } from 'react';

export default function CocktailCard({ strDrink, strDrinkThumb, ...rest }) {
  // useEffect(() => {
  const listing = Object.keys(rest)
    .filter((key) => {
      return key.includes('Ingredient') && rest[key] !== null;
    })
    .map((key) => {
      return rest[key];
    })
    .join(', ');
  // }, []);

  return (
    <div>
      <div>
        <div className="mainCard">
          <div className="imgCard">
            <img src={strDrinkThumb} alt={strDrink} />
          </div>
          <h2>{strDrink}</h2>
          <div className="tagIcon">{listing}</div>
        </div>
      </div>
    </div>
  );
}

CocktailCard.propTypes = {
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strIngredients: PropTypes.string,
};
CocktailCard.defaultProps = {
  strDrink: '',
  strDrinkThumb: '',
  strIngredients: '',
};
