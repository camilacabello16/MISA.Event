import React from "react";

const SVG = ({
  style = {},
  fill="#111831",
  width="24", 
  height="24", 
  viewBox="0 0 24 24"
  }) => (
    <svg id="Icon_calendar" data-name="Icon/calendar" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_16525" data-name="Rectangle 16525" width="24" height="24" fill="none"/>
    <g id="calendar">
      <rect id="Rectangle_16532" data-name="Rectangle 16532" width="18" height="18" rx="2" transform="translate(3 4)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <line id="Line_3" data-name="Line 3" y2="4" transform="translate(16 2)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <line id="Line_4" data-name="Line 4" y2="4" transform="translate(8 2)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <line id="Line_5" data-name="Line 5" x2="18" transform="translate(3 10)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </svg>  
);

export default SVG;

