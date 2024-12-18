
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    navigate(`/search?q=${query}`);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="d-flex justify-content-center my-4">
        <div
          className="input-group"
        >
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search articles, insights and trends..."
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;


