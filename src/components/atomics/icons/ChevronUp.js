import React from "react";

const SVG = ({
  style = {},
  fill="none",
  width="12", 
  height="12", 
  viewBox="0 0 12 12"
  }) => (
    <svg id="Icon_Up" data-name="Icon/Up" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_16530" data-name="Rectangle 16530" width="12" height="12" fill="none"/>
    <path id="chevron-down" d="M6,13l4-4,4,4" transform="translate(-4 -5)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </svg>
  );

export default SVG;