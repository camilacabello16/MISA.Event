import React from 'react'
import TableSettingHeader from '../molecules/TableSettingHeader';
import '../../assets/styles/sections/TableSetting.css';
import TableSettingSelect from '../molecules/TableSettingSelect';
import TableSettingColumn from '../molecules/TableSettingColumn';
import TableSettingButton from '../molecules/TableSettingButton';

function TableSetting() {
    return (
        <div className="wp-table-setting">
            <TableSettingHeader />
            <div className="table-setting-body">
                <TableSettingSelect />
                <TableSettingColumn />
            </div>
            <TableSettingButton />
        </div>
    );
}

export default TableSetting;