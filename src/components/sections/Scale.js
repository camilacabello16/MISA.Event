import React from 'react';
import ConvertScale from '../molecules/ConvertScale';
import ContactScale from '../molecules/ContactScale';
import '../../assets/styles/sections/Scale.css';

function Scale(){
    return (
        <div className="scale">
            <ConvertScale />
            <ContactScale />
        </div>
      );
}

export default Scale;