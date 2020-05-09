import React, { useState, useEffect } from "react";
import "./Box.css";
import { choice } from "./helpers";

const Box = ({ colors }) => {
  //State
  const [color, setColor] = useState("");

  useEffect(() => {
    pickColor();
  }, []);

  const pickColor = () => {
    let newColor;

    do {
      newColor = choice(colors);
    } while (newColor === color);
    setColor(newColor);
  };

  // Handlers
  const handleClick = e => {
    pickColor();
  };

  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};

export default Box;
