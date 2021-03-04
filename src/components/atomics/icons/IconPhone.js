import React from "react";

const SVG = ({
  style = {},
  fill="#111831",
  width="24", 
  height="24", 
  viewBox="0 0 24 24"
  }) => (
    <svg id="Icon_Phone" data-name="Icon/Phone" xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox={viewBox}>
    <rect id="Rectangle_16550" data-name="Rectangle 16550" width="24" height="24" fill="none"/>
    <path id="phone" d="M18.111,14v2.413a1.609,1.609,0,0,1-1.754,1.609,15.921,15.921,0,0,1-6.943-2.47,15.687,15.687,0,0,1-4.827-4.827,15.921,15.921,0,0,1-2.47-6.975A1.609,1.609,0,0,1,3.719,2H6.133A1.609,1.609,0,0,1,7.742,3.384,10.329,10.329,0,0,0,8.3,5.644a1.609,1.609,0,0,1-.362,1.7L6.921,8.363a12.872,12.872,0,0,0,4.827,4.827l1.022-1.022a1.609,1.609,0,0,1,1.7-.362,10.329,10.329,0,0,0,2.261.563A1.609,1.609,0,0,1,18.111,14Z" transform="translate(2.388 1.5)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </svg>
  );

export default SVG;