import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
        );
        const restData = await response.json();
        setRestaurantData(restData.data);
        setFilteredData(restData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchQuery">Search</label>
        <input
          id="searchQuery"
          onChange={handleChange}
          value={query}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {filteredData.map((restaurant) => (
          <div key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>Type: {restaurant.type}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Number of Votes: {restaurant.number_of_votes}</p>
            <p>Price Starts From: {restaurant.price_starts_from}</p>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
