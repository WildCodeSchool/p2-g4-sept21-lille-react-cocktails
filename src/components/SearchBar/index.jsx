import PropTypes from 'prop-types';
import searchIcon from '../../assets/SearchIcon.png';
import './style.css';

export default function SearchBar({
  searchBarInputUser,
  setSearchBarInputUser,
  setStatsSearchBar,
  searchCount,
  setSearchCount,
}) {
  return (
    <div className="searchBar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStatsSearchBar(true);
          setSearchCount(searchCount + 1);
        }}
      >
        <div>
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
        </div>
      </form>
    </div>
  );
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
