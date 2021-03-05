import '../../assets/styles/molecules/TableSettingButton.css';

function CancelButton(props) {
    return(
        <button className="btn-setting-function btn-cancel">{props.text}</button>
    );
}

export default CancelButton;