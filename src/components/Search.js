import React from "react";
import SearchIcon from "../images/search.png";

function Search(){
    return(
        <div className="searchbar">
        <img src={SearchIcon} />
        <input type="search" placeholder="Search" />
      </div>
    )
}

export default Search;