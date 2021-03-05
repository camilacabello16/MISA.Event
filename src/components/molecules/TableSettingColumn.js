import { useEffect, useState } from 'react';
import '../../assets/styles/molecules/TableSettingColumn.css';

function TableSettingColumn(props) {
    const [columnValues, setColumnValues] = useState([
        {
            id: 1,
            name: 'Họ và tên'
        },
        {
            id: 2,
            name: 'Email'
        },
        {
            id: 3,
            name: 'Số điện thoại'
        },
    ]);

    useEffect(() => {
        localStorage.setItem('tableListColumn', JSON.stringify(columnValues));
        if(props.isClick === true){
            var listClone = [...columnValues];
            listClone.push({id: columnValues.length + 1, name: props.tableItem.name});
            setColumnValues(listClone);
            handleCloseClick();
        }
    });

    function handleCloseClick(){
        props.handleCloseClick();
    }

    function handleRemoveItem(index){
        props.handleRemoveItem(columnValues[index]);
        var listClone = [...columnValues];
        listClone.splice(index, 1);
        setColumnValues(listClone);
    }

    const columnValue = columnValues.map((value, index) => {
        return (
            <div className="chosen-item" key={value.id}>
                <div className="chosen-item-icon">
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
                    <div className="chosen-item-box" onClick={() => handleRemoveItem(index)}>
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
            </div>
        );
    })

    return (
        <div className="column-chosen">
            <p className="column-chosen-txt">Đã chọn</p>
            <div className="value-chosen">
                {columnValue}
            </div>
        </div >
    );
}

export default TableSettingColumn;