// import React, {useState} from 'react'

// function SearchBar({product}) {
//   const [searchedProduct, setSearchedProduct] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const handleSearch = (searchedText) => {
//     setSearchedProduct(searchedProduct);
//     const filteredProductsBySearch = product.filter((product) => product.title.toLowerCase().includes(searchedText.toLowerCase()));
//     setFilteredProducts(filteredProductsBySearch);

//     const handleSearchInput = (e) => {
//       const inputText = e.target.value;
//       setSearchedProduct(inputText);
//       handleSearch(inputText); // Use the onSearch prop to update the search term in the parent component
//     };
//   };
//   return (
//     <div>
//         <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search Product"
//               aria-label="Search"
//               onChange={handleSearchInput}
//               value={searchedProduct}
//             />
           
//           </form>
//     </div>
//   )
// }

// export default SearchBar