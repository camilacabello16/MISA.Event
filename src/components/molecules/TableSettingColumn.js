import { useState } from 'react';
import '../../assets/styles/molecules/TableSettingColumn.css';

function TableSettingColumn() {
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

    const columnValue = columnValues.map((value) => {
        return (
            <div className="chosen-item" key={value.id}>
                <div className="chosen-item-icon">
                    <svg id="Icon_Move" data-name="Icon/Move" xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
                        <circle id="Ellipse_2413" data-name="Ellipse 2413" cx="2" cy="2" r="2" transform="translate(7)" fill="#d2d4db" />
                        <circle id="Ellipse_2416" data-name="Ellipse 2416" cx="2" cy="2" r="2" transform="translate(7 7)" fill="#d2d4db" />
                        <circle id="Ellipse_2418" data-name="Ellipse 2418" cx="2" cy="2" r="2" transform="translate(7 14)" fill="#d2d4db" />
                        <circle id="Ellipse_2414" data-name="Ellipse 2414" cx="2" cy="2" r="2" fill="#d2d4db" />
                        <circle id="Ellipse_2415" data-name="Ellipse 2415" cx="2" cy="2" r="2" transform="translate(0 7)" fill="#d2d4db" />
                        <circle id="Ellipse_2417" data-name="Ellipse 2417" cx="2" cy="2" r="2" transform="translate(0 14)" fill="#d2d4db" />
                    </svg>
                </div>
                <div className="chosen-item-blank">
                    <div className="chosen-item-title">{value.name}</div>
                    <div className="chosen-item-box">
                        <svg id="Icon_Check_box_Default" data-name="Icon/Check box/Default" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Stroke_1" data-name="Stroke 1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                <path d="M11.748,0h-7.5A4.122,4.122,0,0,0,0,4.468v7.064A4.117,4.117,0,0,0,4.251,16h7.5A4.118,4.118,0,0,0,16,11.532V4.468A4.118,4.118,0,0,0,11.748,0Z" stroke="none" />
                                <path d="M 4.250809669494629 1.5 C 2.528340339660645 1.5 1.5 2.609490394592285 1.5 4.467889785766602 L 1.5 11.5321102142334 C 1.5 13.39051055908203 2.528340339660645 14.5 4.250809669494629 14.5 L 11.74745941162109 14.5 C 13.47101020812988 14.5 14.5 13.39051055908203 14.5 11.5321102142334 L 14.5 4.467889785766602 C 14.5 2.609490394592285 13.47132968902588 1.5 11.74831962585449 1.5 L 4.250809669494629 1.5 M 4.250809669494629 0 L 11.74831962585449 0 C 14.36886024475098 0 16 1.849949836730957 16 4.467889785766602 L 16 11.5321102142334 C 16 14.15005016326904 14.36886024475098 16 11.74745941162109 16 L 4.250809669494629 16 C 1.630270004272461 16 0 14.15005016326904 0 11.5321102142334 L 0 4.467889785766602 C 0 1.849949836730957 1.638050079345703 0 4.250809669494629 0 Z" stroke="none" fill="#d2d4db" />
                            </g>
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