import '../../assets/styles/atomics/SaveButton.css';
import '../../assets/styles/molecules/TableSettingButton.css';

function SaveButton(props){
    return(
        <button className="btn-setting-function btn-save">{props.text}</button>
    );
}

export default SaveButton;