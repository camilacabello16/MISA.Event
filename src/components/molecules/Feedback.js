import Reacct from 'react';
import '../../assets/styles/molecules/Feedback.scss'

export default function  Feedback(props) {
    const {feedbacks} = props;
    var elemFeedback = feedbacks.map((item,index) => {
        return (
            <div className="fb-title fb-send flex-1">
                <div className="fb-count">{item.count}</div>
                <div className="fb-txt">{item.name}</div>
            </div>
        )
    })
    return (
        <div className="feedback">
           { elemFeedback}  
        </div>
    )
}