import React, { useEffect, useState } from 'react';
import SearchInput from '../atomics/SearchInput';
import '../../assets/styles/molecules/TableSettingSelect.css';
import TableSettingSelectItem from '../atomics/TableSettingSelectItem';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function TableSettingSelect(props) {

    const [tableValues, setTableValues] = useState([]);

    useEffect(() => {
        setTableValues(localStorage.getItem('tableSettingList'));
    })

    function handleAdditem(item){
        props.handleAdditem(item);
    }

    function handleOnDragEnd(result){
        console.log(result);
        if (!result.destination) return;
        const items = Array.from(tableValues);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTableValues(items);
    }

    return (
        <div className="table-select">
            <SearchInput />
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="wp-select-item">
                    {(provided) => (
                        <div className="wp-select-item" {...provided.droppableProps} ref={provided.innerRef}>
                            <TableSettingSelectItem 
                                handleAdditem={handleAdditem}
                                isRemove={props.isRemove}
                                removeItem={props.removeItem}
                                handleCloseRemove={props.handleCloseRemove}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="btn-create-feature">
                <p>Không có đặc tính bạn tìm kiếm? <span>Tạo đặc tính</span></p>
            </div>
        </div>
    );
}

export default TableSettingSelect;