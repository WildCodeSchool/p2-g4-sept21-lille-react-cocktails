import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import searchIcon from '../../assets/SearchIcon.png';
import './style.css';

export default function SearchBar({
  searchBarInputUser,
  setSearchBarInputUser,
  setStatsSearchBar,
  searchCount,
  setSearchCount,
}) {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <form
        className="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          setStatsSearchBar(true);
          setSearchCount(searchCount + 1);
        }}
      >
        <input
          type="search"
          id="mySearch"
          name="nameOfCocktail"
          value={searchBarInputUser}
          onChange={(e) => {
            return setSearchBarInputUser(e.target.value);
          }}
        />
        <button type="submit">
          <img src={searchIcon} alt="Search icon" />
        </button>
      </form>
    );
  }
  return null;
}

SearchBar.propTypes = {
  searchBarInputUser: PropTypes.string,
  setSearchBarInputUser: PropTypes.func,
  setStatsSearchBar: PropTypes.func,
  searchCount: PropTypes.number,
  setSearchCount: PropTypes.func,
};
SearchBar.defaultProps = {
  searchBarInputUser: '',
  setSearchBarInputUser: () => {},
  setStatsSearchBar: () => {},
  searchCount: 0,
  setSearchCount: () => {},
};
