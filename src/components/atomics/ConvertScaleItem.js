import React, { useState } from 'react';
import '../../assets/styles/atomics/ConvertScaleItem.css';

function ConvertScaleItem(){
    const [scaleItem, setScaleItem] = useState([
        {
            scaleId: 1,
            scaleName: 'Tỷ lệ mở',
            scalePercent: 63,
            color: '#13CD3C'
        },
        {
            scaleId: 2,
            scaleName: 'Tỷ lệ click',
            scalePercent: 46,
            color: '#4D53D9'
        },
        {
            scaleId: 3,
            scaleName: 'Gửi thành công',
            scalePercent: 82,
            color: '#CD45A2'
        },
        {
            scaleId: 4,
            scaleName: 'Trả lại',
            scalePercent: 2,
            color: '#717171'
        },
        {
            scaleId: 5,
            scaleName: 'Hủy đăng ký',
            scalePercent: 6,
            color: '#FF4343'
        },
        {
            scaleId: 6,
            scaleName: 'Báo cáo thư rác',
            scalePercent: 8,
            color: '#0ECAF0'
        },
        {
            scaleId: 7,
            scaleName: 'Không gửi tới',
            scalePercent: 5,
            color: '#8723DC'
        }
    ]);

    const listScaleItem = scaleItem.map((item) => {
        return(
            <div className="scale-item contact-item" key={item.scaleId}>
                <div className="scale-item-txt">{item.scaleName}</div>
                <div className="scale-line">
                    <div className="scale-line-container">
                       {
                       item.scalePercent > 5 ? 
                        (<div className="scale-line-percent" style={{width: item.scalePercent + '%', backgroundColor: item.color}}></div>)
                        : (
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="152" height="8" viewBox="0 0 152 8">
                                <defs>
                                    <clipPath id="clip-path">
                                    <rect id="Rectangle_16984" data-name="Rectangle 16984" width="152" height="8" rx="4" transform="translate(761 471)" fill='#E5E8EC'/>
                                    </clipPath>
                                </defs>
                                <g id="Mask_Group_13" data-name="Mask Group 13" transform="translate(-761 -471)" clipPath="url(#clip-path)">
                                    <rect id="Rectangle_16983" data-name="Rectangle 16983" width={item.scalePercent+'%'} height="8" transform="translate(761 471)" fill={item.color}/>
                                </g>
                            </svg>
                        )
                    }
                    </div>
                </div>
                <div className="scale-percent" style={{color: item.color}}>{item.scalePercent}%</div>
            </div>
        );
    })

    return (
        <div className="scale-list">
            {listScaleItem}
        </div>
    );
}

export default ConvertScaleItem;