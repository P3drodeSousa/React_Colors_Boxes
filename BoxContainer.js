import React from "react";
import Box from "./Box";
import "./BoxContainer.css";
const BoxContainer = () => {
  const numBoxes = 18;
  let allColors = ["purple", "magenta", "blue", "pink"];

  const boxes = Array.from({ length: numBoxes }).map(() => (
    <Box colors={allColors} />
  ));
  return <div className="BoxContainer">{boxes}</div>;
};

export default BoxContainer;
