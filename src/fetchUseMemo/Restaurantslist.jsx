import React, { useState, useEffect, useMemo } from "react";

const Restaurantlist = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        const data = await response.json();
        setRestaurants(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const memoizedRestaurantList = useMemo(
    () =>
      restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <img src={restaurant.image} alt={restaurant.name} />
          <div className="restaurant-details">
            <h2>{restaurant.name}</h2>
            <p>Type: {restaurant.type}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Votes: {restaurant.number_of_votes}</p>
            <p>Price: {restaurant.price_starts_from}</p>
          </div>
        </div>
      )),
    [restaurants]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Restaurants</h1>
      {memoizedRestaurantList}
    </div>
  );
};

export default Restaurantlist;
