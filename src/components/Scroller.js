import React from "react";
import "./Scroller.css";
const Scroller = (props) =>{
    return(
        <div className="scroller" style={{overflowY:'scroll', height:'80vh'}}>
            {props.children}
        </div>
    );
}

export default Scroller;