import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todata, settodata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        console.log(data);
        setLoading(false);
        settodata(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
        console.log(err);
      }
    };
    fetchTodoData();
  }, []);

  const handleFilter = (e) => setFilter(e.target.value);
  console.log(filter);

  const filterTodo = todata.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "Not completed") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <>
      {loading && <>...loading</>}
      {error && <>{error}</>}
      <div>
        <label htmlFor="taskCompleted">Select</label>
        <select value={filter} onChange={handleFilter} id="taskCompleted">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </select>
      </div>
      <div>Todo</div>;
      <ol>
        {filterTodo.map((ele) => {
          return (
            <li key={ele.id}>
              <h3>{ele.title}</h3>
              <h3>{ele.id}</h3>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Todo;
