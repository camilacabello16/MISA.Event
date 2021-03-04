import React from "react";

const SVG = ({
  style = {},
  fill="#111831",
  width="24", 
  height="24", 
  viewBox="0 0 24 24"
  }) => (
    <svg id="Icon_Export" data-name="Icon/Export" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_16550" data-name="Rectangle 16550" width="24" height="24" fill="none"/>
    <g id="share_1_" data-name="share (1)" transform="translate(0 -1)">
      <path id="Path_32" data-name="Path 32" d="M4,14v6a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V14" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Path_33" data-name="Path 33" d="M16,6,12,2,8,6" transform="translate(0 3)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Path_34" data-name="Path 34" d="M0,0V11" transform="translate(12 5)" fill="none" stroke={fill} stroke-linecap="round" stroke-width="1.5"/>
    </g>
  </svg>
  );

export default SVG;

