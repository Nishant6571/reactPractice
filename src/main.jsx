import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import Posts from "./Posts.jsx";
import Restaurantlist from "../src/fetchUseMemo/Restaurantslist.jsx";
import Search from "../src/searchFunctionality/Search.jsx";
import Randomnumber from "./Randomnumber.jsx";
import Coffee from "../src/useFetchHook/Coffee.jsx";
import Posts from "../src/fetchDelete/Posts.jsx";
import Todo from "./Todo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Posts /> */}
    {/* <Restaurantlist /> */}
    {/* <Randomnumber /> */}
    <Coffee />
    {/* <Search /> */}
    {/* <Todo /> */}
  </React.StrictMode>
);
