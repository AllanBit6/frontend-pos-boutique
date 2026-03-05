import "./Searchbar.css";
import { useState } from "react";

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form className="section-searchbar" onSubmit={handleSubmit}>
      <p className="searchbar-text">Buscar por:</p>

      <input
        type="search"
        className="searchbar-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit" className="searchbar-button">
        Buscar
      </button>
    </form>
  );
}

export default Searchbar;