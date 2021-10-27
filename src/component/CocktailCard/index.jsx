import PropTypes from 'prop-types';

export default function CocktailCard({ strDrink }) {
  return (
    <div>
      <div>{strDrink}</div>
    </div>
  );
}

CocktailCard.propTypes = { strDrink: PropTypes.string };
CocktailCard.defaultProps = { strDrink: '' };
