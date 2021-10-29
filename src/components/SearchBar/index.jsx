import PropTypes from 'prop-types';
import searchIcon from '../../assets/SearchIcon.png';
import './style.css';

export default function SearchBar({
  searchBarInputUser,
  setSearchBarInputUser,
}) {
  return (
    <div className="searchBar">
      <form>
        <div>
          <input
            type="search"
            id="maRecherche"
            name="q"
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
  setSearchBarInputUser: PropTypes.string,
};
SearchBar.defaultProps = {
  searchBarInputUser: '',
  setSearchBarInputUser: '',
};
