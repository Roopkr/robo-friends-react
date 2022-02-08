import React from "react";
import "./SearchBox.css";
const SearchBox = (props)=>
{
    return(
        <div className="search-box">
            <input type="text" onChange={props.searchResult}></input>
        </div>
    );
}

export default SearchBox;