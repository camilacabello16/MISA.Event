import React from "react";

const SVG = ({
  style = {},
  fill="#111831",
  width="24", 
  height="24", 
  viewBox="0 0 24 24"
  }) => (
    <svg id="Icon_Location" data-name="Icon/Location" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_21" data-name="Rectangle 21" width="24" height="24" fill="none"/>
    <g id="map-pin">
      <path id="Path_26" data-name="Path 26" d="M21,10c0,7-9,13-9,13S3,17,3,10a9,9,0,1,1,18,0Z" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <circle id="Ellipse_12" data-name="Ellipse 12" cx="3" cy="3" r="3" transform="translate(9 7)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </svg>
  );

export default SVG;

