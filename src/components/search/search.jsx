import './search.css';

const Search = () => {

  return (
    <div className="search d-flex align-items-center">
      <div className="searchText">
        Looking for
      </div>
      <input type="text" placeholder="start typing here..." />
    </div>
  );
};

export default Search;
