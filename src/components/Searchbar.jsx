import React, { useState } from "react";
import "./Searchbar.css";

function Searchbar({onSearch}){
    const [query, setQuery] = useState(""); // guarda lo que el usuario escribe

    // Esta función se llama cuando se hace clic en "Buscar"
    const handleSearch = () => {
        if (onSearch) onSearch(query); // llama al callback del padre con el texto
    };

    // Esta función permite presionar Enter para buscar
    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return(
        <div className="section-searchbar">
                <p className="searchbar-text">Buscar por: </p>
                <input 
                type="search" 
                className="searchbar-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                />
                <button className="searchbar-button" onClick={handleSearch}>Buscar</button>
            </div>
    )
}

export default Searchbar;