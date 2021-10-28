import searchIcon from '../../assets/SearchIcon.png';
import './style.css';

export default function SearchBar() {
  return (
    <div className="searchBar">
      <form>
        <div>
          <input type="search" id="maRecherche" name="q" />
          <button type="submit">
            <img src={searchIcon} alt="Search icon" />
          </button>
        </div>
      </form>
    </div>
  );
}
