import React from 'react'
import '../../assets/styles/atomics/ChartCircular.scss'
import StatisticalIcon from './Statistical-icon'
import 'antd/dist/antd.css';
function setColor(color){
    return {
        "color" : color
    }
}

export default function Statistical(props){
    var {colors, status, percent, statistics, Icon, style} = props;
    return (
        <div
        className="statistical"
        > 
        <StatisticalIcon percent={percent} colors={colors} width={48} Icon={Icon} style= {style}/>
        <div className='statistical-status'>
            <div className="statistics">
              { statistics }
            </div>
            <div className='txt-status'>
              { status }
            </div>
        </div>
        <div className='statistical-percent'>
          <div className='numb-percent' style={setColor(colors[0])}>
            { percent }%
          </div>
        </div>
      </div>
    )
}