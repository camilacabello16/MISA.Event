import React from 'react';
import '../../assets/styles/molecules/TableSettingHeader.css';
import IconCloseWhite from '../atomics/IconCloseWhite';

function TableSettingHeader(){
    return (
        <div className="wp-table-setting-header">
            <div className="setting-header-txt">
                Thiết lập cột
            </div>
            <div className="setting-header-icon">
                <IconCloseWhite />
            </div>
        </div>
    );
}

export default TableSettingHeader;