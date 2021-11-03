import PropTypes from 'prop-types';
import './style.css';

export default function CocktailCard({ strDrink, strDrinkThumb, ...rest }) {
  const listing = Object.keys(rest)
    .filter((key) => {
      return key.includes('Ingredient') && rest[key] !== null;
    })
    .map((key) => {
      return rest[key];
    })
    .join(', ')
    .replace(/, ([^,]*)$/, '');

  return (
    <div>
      <div className="mainCard">
        <div className="imgCard">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <h2 className="titleCard">{strDrink}</h2>
        <p className="ingredientCard">{listing}</p>
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
