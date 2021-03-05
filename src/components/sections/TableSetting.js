import React, { useState } from 'react'
import TableSettingHeader from '../molecules/TableSettingHeader';
import '../../assets/styles/sections/TableSetting.css';
import TableSettingSelect from '../molecules/TableSettingSelect';
import TableSettingColumn from '../molecules/TableSettingColumn';
import TableSettingButton from '../molecules/TableSettingButton';

function TableSetting() {
    const [tableItem, setTableItem] = useState();
    const [isClick, setIsClick] = useState(false);
    const [removeItem, setRemoveItem] = useState();
    const [isRemove, setIsRemove] = useState(false);

    function handleAdditem(item){
        console.log(item);
        setTableItem(item);
        setIsClick(true);
    }

    function handleCloseClick(){
        setIsClick(false);
    }

    function handleRemoveItem(item) {
        setRemoveItem(item);
        setIsRemove(true);
    }

    function handleCloseRemove() {
        setIsRemove(false);
    }

    return (
        <div className="wp-table-setting">
            <TableSettingHeader />
            <div className="table-setting-body">
                <TableSettingSelect 
                    handleAdditem={handleAdditem}
                    removeItem={removeItem}
                    isRemove={isRemove}
                    handleCloseRemove={handleCloseRemove}
                />
                <TableSettingColumn
                    tableItem={tableItem}
                    handleAdditem={handleAdditem}
                    isClick={isClick}
                    handleCloseClick={handleCloseClick}
                    handleRemoveItem={handleRemoveItem}
                />
            </div>
            <TableSettingButton />
        </div>
    );
}

export default TableSetting;