import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Call from "../functions/Call"; 

const CrewComponent = () => {
    const target = "https://api.spacexdata.com/v4/crew";
      const data = Call(target);
      console.log (data)
 
    return (
        <div>
            {data.map((crew) => (
          <div key={crew.id}>
          <h3>
              <Link to={`/crew/${crew.id}`}>{crew.name}</Link>
          </h3>
            <h3>
              <p>{crew.id}</p>
              <img src={crew.image}></img>
            </h3>
          </div>
        ))}
        </div>
    )
}
 
export default CrewComponent;
