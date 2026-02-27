import "./Searchbar.css";

function Searchbar(){
    return(
        <div className="section-searchbar">
                <p className="searchbar-text">Buscar por: </p>
                <input type="search" className="searchbar-input"/>
                <button className="searchbar-button">Buscar</button>
            </div>
    )
}

export default Searchbar;