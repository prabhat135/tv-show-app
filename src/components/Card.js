import React from "react";
import "./css/Card.css"
import { Link } from "react-router-dom";

function Card(props) {
  
  return (
    <div className="card-container">
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h1>{props.title}</h1>
          <p>{props.desc} </p>                    
            <>
              <Link to={`/show/${props.id}`}>
                READ MORE
              </Link>
            </>


        </div>
        <img src={props.imgSrc} alt="" />
      </div>

    </div>
  );
}

export default Card;
