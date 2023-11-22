import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar"; 

function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  
  return (
    <div>
     <h1>WELCOME TO SWIFTCART</h1>
     <SearchBar onSearch={handleSearch} />
        <ProductList products={filteredItems} />
    </div>
  );
}

export default Home;