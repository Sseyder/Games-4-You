import React, { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";


import "./ItemCount.scss";
import { Container } from "@material-ui/core";

const ItemCount = ({ initial, min, max, setQuantity }) => {
  const [counter, setCounter] = useState(initial);

  const handleIncrement = () => {
    counter < max ? setCounter(counter + 1) : console.log("Máximo alcanzado");
  };

  const handleDecrement = () => {
    counter > min ? setCounter(counter - 1) : console.log("Mínimo alcanzado");
  };

  useEffect(() => {
    setQuantity(counter);
  }, [counter, setQuantity]);

  return (
    <Container>
      <div className="counter" style={{ width: "15rem" }}>
      <div className="counter__content">
        <div className="counter__content-controls">
          <span
            className="counter__content-controls-subtract"
            onClick={handleDecrement}
          >
            <RemoveIcon />
          </span>
          <span className="counter__content-controls-value"> {counter} </span>
          <span
            className="counter__content-controls-add"
            onClick={handleIncrement}
          >
            <AddIcon />
          </span>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default ItemCount;