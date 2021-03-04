import React from 'react'

import '../../assets/styles/molecules/StatusCard.scss'
import ImageNewYear from '../atomics/icons/ImageNewYear'
export default function  StatusCard(props) {
    const {statusCards }  = props;
    const style = {
        width : '100%',
        height : '100%'
    }
    return (
        <div className="StatusCard">
            <div className="img-card">
                <ImageNewYear width={style.width} height={style.height} viewBox={'0 0 100% 100%'}/>
            </div>
            <div className="status-card">
                <div className="status-card-title">
                    <div className="sc-title flex-1">Trạng thái</div>
                    <div className="sc-content flex-1">Nháp</div>
                </div>
                <div className="status-card-title">
                    <div className="sc-title modified flex-1">Sửa dối lần cuối</div>
                    <div className="sc-content flex-1">{statusCards.createdDate}</div>
                </div>
                <div className="status-card-title">
                    <div className="sc-title created flex-1">Tạo lúc</div>
                    <div className="sc-content flex-1">{statusCards.modifiedDate}</div>
                </div>
                <div className="status-card-title">
                    <div className="sc-title menu-card flex-1">Danh mục</div>
                    <div className="sc-content flex-1">
                        <div className="bg-card br-8 pd-card">
                            <div>Thiệp</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}