import React from "react";
import "./Cards.css";
const Cards = ({id,name,email}) =>{
    return(
        <div className="card">
            <img alt="no img to show" src = {`https://robohash.org/${id}?200x200`}/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Cards;