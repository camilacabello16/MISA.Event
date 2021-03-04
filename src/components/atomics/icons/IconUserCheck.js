import React from "react";

const SVG = ({
  style = {},
  fill="#fff",
  width="20.294", 
  height="16.628", 
  viewBox="0 0 20.294 16.628"
  }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
  <g id="user-check" transform="translate(1 1)">
    <path id="Path_30" data-name="Path 30" d="M13.19,19.876V18.251A3.251,3.251,0,0,0,9.94,15H4.251A3.251,3.251,0,0,0,1,18.251v1.625" transform="translate(-1 -5.248)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle id="Ellipse_15" data-name="Ellipse 15" cx="3.251" cy="3.251" r="3.251" transform="translate(2.844 0)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_31" data-name="Path 31" d="M17,10.625l1.625,1.625L21.876,9" transform="translate(-3.997 -4.124)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>
  );

export default SVG;

