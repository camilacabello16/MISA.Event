import React from 'react';
import SearchInput from '../atomics/SearchInput';
import '../../assets/styles/molecules/TableSettingSelect.css';
import TableSettingSelectItem from '../atomics/TableSettingSelectItem';

function TableSettingSelect() {
    return (
        <div className="table-select">
            <SearchInput />
            <div className="wp-select-item">
                <TableSettingSelectItem />
            </div>
            <div className="btn-create-feature">
                <p>Không có đặc tính bạn tìm kiếm? <span>Tạo đặc tính</span></p>
            </div>
        </div>
    );
}

export default TableSettingSelect;