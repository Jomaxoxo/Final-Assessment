import React, { useState } from "react";

const SearchFilter = ({ tasks, setFilteredTasks }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filtered = tasks.filter((task) =>
      task.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <div className="search-filter-container">
      <input
        type="text"
        className="search-filter-input"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
