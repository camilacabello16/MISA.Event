import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Svg from './index.js';

Icon.propTypes = {
    fill: PropTypes.string,
    name: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string,
};

/**
 * Component Icon
 * @param {*} props
 * @author: NTGIANG (01/01/2021) 
 */
function Icon(props) {
    return (
        <Svg {...props} />
    );
}
export default Icon;