import './style.css';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import Favorites from '../Favorites';
import logo1 from '../../assets/logo1.png';

export default function Header({
  displaySearch,
  searchBarInputUser,
  setSearchBarInputUser,
  statsSearchBar,
  setStatsSearchBar,
}) {
  return (
    <div className="header">
      <div className="top">
        <div className="title">
          <h1>Shaker</h1>
        </div>
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>
      </div>
      <div className="bottom">
        {displaySearch && (
          <SearchBar
            searchBarInputUser={searchBarInputUser}
            setSearchBarInputUser={setSearchBarInputUser}
            statsSearchBar={statsSearchBar}
            setStatsSearchBar={setStatsSearchBar}
          />
        )}
        {displaySearch ? <Favorites /> : null}
      </div>
    </div>
  );
}

Header.propTypes = {
  displaySearch: PropTypes.bool,
  searchBarInputUser: PropTypes.func,
  setSearchBarInputUser: PropTypes.func,
  statsSearchBar: PropTypes.func,
  setStatsSearchBar: PropTypes.func,
};
Header.defaultProps = {
  displaySearch: false,
  searchBarInputUser: () => {},
  setSearchBarInputUser: () => {},
  statsSearchBar: () => {},
  setStatsSearchBar: () => {},
};
