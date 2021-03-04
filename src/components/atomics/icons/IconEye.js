import React from "react";

const SVG = ({
  style = {},
  fill="#111831",
  width="24", 
  height="24", 
  viewBox="0 0 24 24"
  }) => (
    <svg id="Icon_Eye" data-name="Icon/Eye" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_16558" data-name="Rectangle 16558" width="24" height="24" fill="none"/>
    <g id="eye">
      <path id="Path_37" data-name="Path 37" d="M1,12S5,4,12,4s11,8,11,8-4,8-11,8S1,12,1,12Z" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <circle id="Ellipse_16" data-name="Ellipse 16" cx="3" cy="3" r="3" transform="translate(9 9)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </svg>
  
  );

export default SVG;

