import React from "react";

const SVG = ({
  style = {},
  fill="#111831",
  width="24", 
  height="24", 
  viewBox="0 0 24 24"
  }) => (
    <svg id="Icon_Back" data-name="Icon/Back" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
      <rect id="Rectangle_16525" data-name="Rectangle 16525" width="24" height="24" fill="none"/>
      <g id="arrow-left">
        <line id="Line_2" data-name="Line 2" x1="14" transform="translate(5 12)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_24" data-name="Path 24" d="M12,19,5,12l7-7" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </svg>);

export default SVG;

