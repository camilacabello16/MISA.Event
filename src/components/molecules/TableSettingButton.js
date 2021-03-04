import '../../assets/styles/molecules/TableSettingButton.css';

function TableSettingButton() {
    return (
        <div className="wp-btn-setting">
            <div className="btn-setting">
                <button className="btn-setting-function btn-save">Lưu</button>
                <button className="btn-setting-function btn-cancel">Hủy</button>
            </div>
        </div>
    );
}

export default TableSettingButton;