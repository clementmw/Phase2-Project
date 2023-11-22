import React, { useState } from 'react';

function NavBar({ products, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    onCategoryChange(selectedValue);
  };

  const handleSearch = () => {
    // Add your search functionality here
    // You can use the searchInput state to get the search input value
    console.log('Search button clicked');
  };

  const categoryList = (
    <select onChange={handleCategoryChange} value={selectedCategory}>
      <option value=''>Categories</option>
      {uniqueCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb- mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/cart">
                Cart
              </a>
            </li>

          {categoryList}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
