import React from "react";

import Cards from "./Cards";
import "./CardList.css";

const CardList = (props) => {
    return(
        <div className="card-list">
            {
                props.robotList.map((robot,i) =>{
                    return(
                        <Cards id={robot.id} name={robot.name} email={robot.email} />
                    )
                })
            }
        </div>
    );
}

export default CardList;