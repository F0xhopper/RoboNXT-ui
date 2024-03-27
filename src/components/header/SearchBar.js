const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <form className="searchBarForm" role="search">
        <input
          className="searchBarInput"
          placeholder="Search"
          aria-label="Search through site content"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
