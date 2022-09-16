import React from "react";
import { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [showMore, setShowMore] = useState(false)
  
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h3>{name} </h3> <p className="tour-price ">${price}</p>
        </div>
        <p>{showMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>{showMore ? `Show less` : `Show more`}</button></p>
        <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
