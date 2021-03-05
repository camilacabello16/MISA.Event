import '../../assets/styles/molecules/TableSettingButton.css';
import CancelButton from '../atomics/CancelButton';
import SaveButton from '../atomics/SaveButton';

function TableSettingButton() {
    return (
        <div className="wp-btn-setting">
            <div className="btn-setting">
                <SaveButton text="Lưu" />
                <CancelButton text="Hủy" />
            </div>
        </div>
    );
}

export default TableSettingButton;