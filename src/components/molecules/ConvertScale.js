import React from 'react';
import '../../assets/styles/molecules/ConvertScale.css';
import ConvertScaleItem from '../atomics/ConvertScaleItem';

function ConvertScale(){
    return(
        <div className="wp-scale">
            <p className="scale-txt">Tỷ lệ chuyển đổi</p>
            <ConvertScaleItem />
        </div>
    );

}
export default ConvertScale;
