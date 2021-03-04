import React, {useState} from 'react';
import "../../assets/styles/pages/PerformancePage.css";
import StatusCard from '../molecules/StatusCard';
import IconOrientation from '../atomics/icons/IconOrientation';
import IconMessenger from '../atomics/icons/IconMessenger';
import IconMouse from '../atomics/icons/IconMouse';
import Statistical from '../molecules/Statistical';
import '../../assets/styles/molecules/Statistical.scss';
import '../../assets/styles/molecules/Navbar.scss'
import Feedback from '../molecules/Feedback';
import Scale from '../sections/Scale';
import Diagram from '../sections/Diagram';

function PerformencePage(){
    function getStatus(ca){
        switch(ca){
          case 0 : return "Gửi thành công";
          case 1 : return "Đã mở";
          case 2 : return "Đã click";
          default: return null;
        }
      }
      // lấy màu sắc : border, background, color phần còn lại 
      function getColor(colorIndex) {
        switch(colorIndex){
            case 0 : return [
                '#CD45A2','#F5DAEC', '#ffffff'];
            case 1 : return [
                '#13CD3C','#CFF5D8', '#ffffff'];
            case 2 : return [
                '#4D53D9','#DBDCF8', '#ffffff'];
            default: return null;
        }
      }
      // trả về icon 
      function getIcon(params) {
        switch (params){
          case 0 : return IconOrientation;
          case 1 : return IconMessenger;
          case 2 : return IconMouse;
          default: return null;
        }
      }
      // kích thước, style
      function getStyleIcon(params) {
            switch(params){
                case 0: return{
                    width : 24,
                    height : 24,
                    top: 12,
                    left : 12, // positon : absolute
                };
                case 1: return{
                    width : 24,
                    height : 24,
                    top: 12,
                    left : 12,
                };
                case 2: return {
                    width : 24,
                    height : 24,
                    top: 12,
                    left : 12,
                };
            default: return null;
        }
      }
      
      const [status, setStatus] = useState(0)
      const [statistics, setStatistics] = useState(123);
      const [percent , setPercent] = useState(30);
      // Feedback
      const [feedbacks, setFeedback] = useState([
        {count : 123, name : "Gửi đi"},
        {count : 13, name : "Trả lại"},
        {count : 173, name : "Hủy đăng ký"},
        {count : 223, name : "Báo cáo thư rác"},
        {count : 423, name : "Không gửi tới"},
      ])
    
      // StatusCard 
      const [statusCards,setStatusCards] = useState({
        createdDate : '19/01/2000',
        modifiedDate : '01/02/2009'
      })    

    return (
        <div className="performance-page">
            <div className="wp-menu">MENU</div>
            <div className="wp-content">
                <div className="content-header"></div>
                <div className="content">
                    <div className="perform-content">
                        <div className="status-content">
                            <StatusCard statusCards={statusCards}/>
                        </div>
                        <div className="scale-content">
                            <div className="statis-scale">
                                <Statistical 
                                    status={ getStatus(status) }
                                    statistics = {statistics}
                                    percent={percent}
                                    colors={getColor(status)}
                                    Icon = {getIcon(status)}
                                    style = { getStyleIcon(status)}
                                />
                                <Statistical 
                                    status={ getStatus(status) }
                                    statistics = {statistics}
                                    percent={percent}
                                    colors={getColor(status)}
                                    Icon = {getIcon(status)}
                                    style = { getStyleIcon(status)}
                                />
                                <Statistical 
                                    status={ getStatus(status) }
                                    statistics = {statistics}
                                    percent={percent}
                                    colors={getColor(status)}
                                    Icon = {getIcon(status)}
                                    style = { getStyleIcon(status)}
                                />
                            </div>
                            <Feedback feedbacks={feedbacks}/>
                            <Scale />
                        </div>
                    </div>
                    <div className="scale-diagram">
                        <Diagram />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PerformencePage;