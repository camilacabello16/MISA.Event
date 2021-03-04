import React from "react";

const SVG = ({
  style = {},
  fill="#abb1bc",
  stroke = "#232C51",
  width="12", 
  height="12", 
  viewBox="0 0 12 12"
  }) => (
    <svg id="Icon_Down" data-name="Icon/Down" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_21" data-name="Rectangle 21" width="12" height="12" fill="none"/>
    <path id="chevron-down" d="M6,9l4,4,4-4" transform="translate(-4 -5)" fill="none" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </svg>
  );

export default SVG;