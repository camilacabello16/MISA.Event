import React from 'react';
import '../../assets/styles/molecules/TableSettingHeader.css';

function TableSettingHeader(){
    return (
        <div className="wp-table-setting-header">
            <div className="setting-header-txt">
                Thiết lập cột
            </div>
            <div className="setting-header-icon">
                <svg id="Icon_Close_to" data-name="Icon/Close to" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="x_1_" data-name="x (1)">
                        <line id="Line_6" data-name="Line 6" x1="12" y2="12" transform="translate(6 6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <line id="Line_7" data-name="Line 7" x2="12" y2="12" transform="translate(6 6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                    <rect id="Rectangle_16539" data-name="Rectangle 16539" width="24" height="24" fill="none"/>
                </svg>
            </div>
        </div>
    );
}

export default TableSettingHeader;