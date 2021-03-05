import React, { useState } from 'react'
import TableSettingHeader from '../molecules/TableSettingHeader';
import '../../assets/styles/sections/TableSetting.css';
import TableSettingButton from '../molecules/TableSettingButton';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SearchInput from '../atomics/SearchInput';
import '../../assets/styles/atomics/TableSettingSelectItem.css';
import '../../assets/styles/molecules/TableSettingColumn.css';
import '../../assets/styles/molecules/TableSettingSelect.css';

function TableSetting() {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    //cột phải
    const [columnValues, setColumnValues] = useState([
        {
            id: makeid(8),
            name: 'Họ và tên',
        },
        {
            id: makeid(8),
            name: 'Email',
        },
        {
            id: makeid(8),
            name: 'Số điện thoại',
        },
    ]);

    //cột trái
    const [selectItems, setSelectItems] = useState([
        {
            id: makeid(8),
            name: 'Địa chỉ',
        },
        {
            id: makeid(8),
            name: 'Email'
        },
        {
            id: makeid(8),
            name: 'Facebook'
        },
        {
            id: makeid(8),
            name: 'Số điện thoại'
        },
        {
            id: makeid(8),
            name: 'Địa chỉ'
        },
        {
            id: makeid(8),
            name: 'Địa chỉ'
        },
        {
            id: makeid(8),
            name: 'Địa chỉ'
        },
        {
            id: makeid(8),
            name: 'Địa chỉ'
        },
        {
            id: makeid(8),
            name: 'Địa chỉ'
        },
        {
            id: makeid(8),
            name: 'Địa chỉ'
        },
    ]);

    //cột trái
    const listItem = selectItems.map((item, index) => {
        return (
            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(provided) => (
                    <div 
                        className="select-item" 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="select-item-name">{item.name}</div>
                        <div className="select-item-checkbox">
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

    //cột phải
    const columnValue = columnValues.map((value, index) => {
        return (
            <Draggable key={value.id} draggableId={value.id} index={index}>
                {(provided) => (
                    <li 
                        className="chosen-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}    
                    >
                        <div className="chosen-item-icon" draggable>
                            <svg id="Icon_Move" dataname="Icon/Move" xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
                                <circle id="Ellipse_2413" dataname="Ellipse 2413" cx="2" cy="2" r="2" transform="translate(7)" fill="#d2d4db" />
                                <circle id="Ellipse_2416" dataname="Ellipse 2416" cx="2" cy="2" r="2" transform="translate(7 7)" fill="#d2d4db" />
                                <circle id="Ellipse_2418" dataname="Ellipse 2418" cx="2" cy="2" r="2" transform="translate(7 14)" fill="#d2d4db" />
                                <circle id="Ellipse_2414" dataname="Ellipse 2414" cx="2" cy="2" r="2" fill="#d2d4db" />
                                <circle id="Ellipse_2415" dataname="Ellipse 2415" cx="2" cy="2" r="2" transform="translate(0 7)" fill="#d2d4db" />
                                <circle id="Ellipse_2417" dataname="Ellipse 2417" cx="2" cy="2" r="2" transform="translate(0 14)" fill="#d2d4db" />
                            </svg>
                        </div>
                        <div className="chosen-item-blank">
                            <div className="chosen-item-title">{value.name}</div>
                            <div className="chosen-item-box">
                                <svg id="Icon_Check_box_Active" dataname="Icon/Check box/Active" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                    <defs>
                                        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                            <stop offset="0" stopColor="#ff82b4"/>
                                            <stop offset="1" stopColor="#8723dc"/>
                                        </linearGradient>
                                    </defs>
                                    <path id="Stroke_1" dataname="Stroke 1" d="M11.748,0h-7.5A4.122,4.122,0,0,0,0,4.468v7.064A4.117,4.117,0,0,0,4.251,16h7.5A4.118,4.118,0,0,0,16,11.532V4.468A4.118,4.118,0,0,0,11.748,0Z" fill="url(#linear-gradient)"/>
                                    <path id="Stroke_3" dataname="Stroke 3" d="M0,2.052,2.053,4.1,6.158,0" transform="translate(4.921 5.948)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                                </svg>
                            </div>
                        </div>
                    </li>
                )}
            </Draggable>
        );
    })

    function onDragEnd(result){
        console.log(result);
        const { source, destination } = result;
        
        var id = result.draggableId;
        var arrLeft = [];
        var arrRight = [];
        for(let i = 0; i<selectItems.length;i++){
            arrLeft.push(selectItems[i].id);
        }
        for(let i = 0; i<columnValues.length;i++){
            arrRight.push(columnValues[i].id);
        }
        if(source.droppableId === destination.droppableId){
            if (!destination) {
                return;
            }
            if(result.destination.droppableId === 'droppable2') {
                const items = Array.from(columnValues);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);

                setColumnValues(items);
            }
            else if(result.destination.droppableId === 'droppable') {
                const items = Array.from(selectItems);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);

                setSelectItems(items);
            }
        } else {
            var chosen;
            var index;
            var leftClone = [...selectItems];
            var rightClone = [...columnValues];
            if(arrLeft.indexOf(id) > 0){
                chosen = selectItems[arrLeft.indexOf(id)];
                index = arrLeft.indexOf(id);
                leftClone.splice(index, 1);
                setSelectItems(leftClone);
                rightClone.push({id: makeid(8), name: chosen.name});
                setColumnValues(rightClone);
            } else if(arrRight.indexOf(id) > 0){
                index = arrRight.indexOf(id);
                chosen = columnValues[index];
                leftClone.push({id: makeid(8), name: chosen.name});
                setSelectItems(leftClone);
                rightClone.splice(index, 1);
                setColumnValues(rightClone);
            }
        }
    }

    return (
        <div className="wp-table-setting">
            <TableSettingHeader />
            <div className="table-setting-body">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div className="table-select" ref={provided.innerRef}>
                                <SearchInput />
                                    <div className="wp-select-item">
                                        {listItem}
                                    </div>
                                <div className="btn-create-feature">
                                    <p>Không có đặc tính bạn tìm kiếm? <span>Tạo đặc tính</span></p>
                                </div>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable2">
                        {(provided) => (
                            <div className="column-chosen" ref={provided.innerRef}>
                                <p className="column-chosen-txt">Đã chọn</p>
                                <div className="value-chosen">
                                    <ul className="characters" >
                                        {columnValue}
                                    </ul>  
                                </div>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            <TableSettingButton />
        </div>
    );
}

export default TableSetting;