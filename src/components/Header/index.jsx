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
  searchCount,
  setSearchCount,
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
            rest
            searchCount={searchCount}
            setSearchCount={setSearchCount}
          />
        )}
        {displaySearch ? <Favorites /> : null}
      </div>
    </div>
  );
}

Header.propTypes = {
  displaySearch: PropTypes.bool,
  searchBarInputUser: PropTypes.string,
  setSearchBarInputUser: PropTypes.func,
  statsSearchBar: PropTypes.bool,
  setStatsSearchBar: PropTypes.func,
  searchCount: PropTypes.number,
  setSearchCount: PropTypes.func,
};
Header.defaultProps = {
  displaySearch: false,
  searchBarInputUser: '',
  setSearchBarInputUser: () => {},
  statsSearchBar: false,
  setStatsSearchBar: () => {},
  searchCount: 0,
  setSearchCount: () => {},
};
