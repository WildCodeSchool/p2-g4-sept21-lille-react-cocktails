import './style.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import logo1 from '../../assets/logo1.png';
import favoritesIcon from '../../assets/coeurtoutjaune.png';

export default function Header({
  searchBarInputUser,
  setSearchBarInputUser,
  statsSearchBar,
  setStatsSearchBar,
  searchCount,
  setSearchCount,
}) {
  return (
    <header className="header">
      <h1>Shaker</h1>
      <div className="logo">
        <Link to="/">
          <img src={logo1} alt="Logo" />
        </Link>
      </div>
      <div className="searchBar">
        <SearchBar
          searchBarInputUser={searchBarInputUser}
          setSearchBarInputUser={setSearchBarInputUser}
          statsSearchBar={statsSearchBar}
          setStatsSearchBar={setStatsSearchBar}
          searchCount={searchCount}
          setSearchCount={setSearchCount}
        />
      </div>
      <div className="favorisIcon">
        <Link to="/favorites">
          <img src={favoritesIcon} alt="Favourites icon" />
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  searchBarInputUser: PropTypes.string,
  setSearchBarInputUser: PropTypes.func,
  statsSearchBar: PropTypes.bool,
  setStatsSearchBar: PropTypes.func,
  searchCount: PropTypes.number,
  setSearchCount: PropTypes.func,
};
Header.defaultProps = {
  searchBarInputUser: '',
  setSearchBarInputUser: () => {},
  statsSearchBar: false,
  setStatsSearchBar: () => {},
  searchCount: 0,
  setSearchCount: () => {},
};
