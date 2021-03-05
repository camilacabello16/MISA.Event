import React, { useEffect, useState } from "react";
import '../../assets/styles/atomics/TableSettingSelectItem.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TableSettingSelectItem(props) {
    const [selectItems, setSelectItems] = useState([
        {
            id: 1,
            name: 'Địa chỉ'
        },
        {
            id: 2,
            name: 'Email'
        },
        {
            id: 3,
            name: 'Facebook'
        },
        {
            id: 4,
            name: 'Số điện thoại'
        },
        {
            id: 5,
            name: 'Địa chỉ'
        },
        {
            id: 6,
            name: 'Địa chỉ'
        },
        {
            id: 7,
            name: 'Địa chỉ'
        },
        {
            id: 8,
            name: 'Địa chỉ'
        },
        {
            id: 9,
            name: 'Địa chỉ'
        },
        {
            id: 10,
            name: 'Địa chỉ'
        },
    ]);

    useEffect(() => {
        if(props.isRemove === true){
            var listClone = [...selectItems];
            listClone.push({id: (selectItems.length + 1), name: props.removeItem.name});
            setSelectItems(listClone);
            props.handleCloseRemove();
        }
        localStorage.setItem('tableSettingList', JSON.stringify(selectItems));
    });

    function handleAddItem(index){
        props.handleAdditem(selectItems[index]);
        var listClone = [...selectItems];
        listClone.splice(index, 1);
        setSelectItems(listClone);
        localStorage.setItem('tableItem', JSON.stringify(selectItems[index]));
    }

    const listItem = selectItems.map((item, index) => {
        return (
            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(provided) => (
                    <div className="select-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="select-item-name">{item.name}</div>
                    <div className="select-item-checkbox" onClick={() => handleAddItem(index)}>
                        <svg id="Icon_Check_box_Default" dataname="Icon/Check box/Default" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Stroke_1" dataname="Stroke 1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                <path d="M11.748,0h-7.5A4.122,4.122,0,0,0,0,4.468v7.064A4.117,4.117,0,0,0,4.251,16h7.5A4.118,4.118,0,0,0,16,11.532V4.468A4.118,4.118,0,0,0,11.748,0Z" stroke="none" />
                                <path d="M 4.250809669494629 1.5 C 2.528340339660645 1.5 1.5 2.609490394592285 1.5 4.467889785766602 L 1.5 11.5321102142334 C 1.5 13.39051055908203 2.528340339660645 14.5 4.250809669494629 14.5 L 11.74745941162109 14.5 C 13.47101020812988 14.5 14.5 13.39051055908203 14.5 11.5321102142334 L 14.5 4.467889785766602 C 14.5 2.609490394592285 13.47132968902588 1.5 11.74831962585449 1.5 L 4.250809669494629 1.5 M 4.250809669494629 0 L 11.74831962585449 0 C 14.36886024475098 0 16 1.849949836730957 16 4.467889785766602 L 16 11.5321102142334 C 16 14.15005016326904 14.36886024475098 16 11.74745941162109 16 L 4.250809669494629 16 C 1.630270004272461 16 0 14.15005016326904 0 11.5321102142334 L 0 4.467889785766602 C 0 1.849949836730957 1.638050079345703 0 4.250809669494629 0 Z" stroke="none" fill="#d2d4db" />
                            </g>
                        </svg>
                    </div>
                </div>
                )}
            </Draggable>
                        
        );
    })

    return (
        <React.Fragment>
            { listItem } 
        </React.Fragment>
    );
}

export default TableSettingSelectItem;