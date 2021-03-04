import React from "react";

const SVG = ({
  style = {},
  fill="#111831",
  width="24", 
  height="24",
  viewBox="0 0 24 24"
  }) => (
    <svg id="Icon_Trash" data-name="Icon/Trash" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_16559" data-name="Rectangle 16559" width="24" height="24" fill="none"/>
    <g id="trash">
      <path id="Path_38" data-name="Path 38" d="M3,6H21" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Path_39" data-name="Path 39" d="M19,6V20a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </svg>
  );

export default SVG;