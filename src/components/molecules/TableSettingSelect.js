import React from 'react';
import SearchInput from '../atomics/SearchInput';
import '../../assets/styles/molecules/TableSettingSelect.css';
import TableSettingSelectItem from '../atomics/TableSettingSelectItem';

function TableSettingSelect(props) {


    function handleAdditem(item){
        props.handleAdditem(item);
    }

    return (
        <div className="table-select">
            <SearchInput />
            <div className="wp-select-item">
                <TableSettingSelectItem 
                    handleAdditem={handleAdditem}
                    isRemove={props.isRemove}
                    removeItem={props.removeItem}
                    handleCloseRemove={props.handleCloseRemove}
                />
            </div>
            <div className="btn-create-feature">
                <p>Không có đặc tính bạn tìm kiếm? <span>Tạo đặc tính</span></p>
            </div>
        </div>
    );
}

export default TableSettingSelect;