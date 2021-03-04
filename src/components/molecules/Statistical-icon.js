import React from 'react'
import '../../assets/styles/atomics/ChartCircular.scss'
import { Progress } from 'antd';

function setBackground(params) {
    return {
        'background-color' : params
    }
}
export default function StatisticalIcon(props){
    const { percent, colors, width, Icon, style , borderSize} = props;
    const position = {
        top: style.top,
        left : style.left,
        position : 'absolute'
    }
    return (
        <div className='statistical-icon'>
            <div className="circular" style = {setBackground(colors[1])}>

            </div>
            <Progress type="circle" trailColor={colors[2]} percent={percent} width={width} strokeColor={colors[0]}  showInfo={""}
                strokeWidth={borderSize}
            />         
            
            <Icon style= {position} fill={colors[0]} width={style.width} height={style.height}/>
        </div>
        
    )
}
