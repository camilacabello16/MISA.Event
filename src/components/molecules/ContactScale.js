import React, {useState} from 'react';
import '../../assets/styles/molecules/ContactScale.css';
import '../../assets/styles/molecules/ConvertScale.css';
import ContactScaleItem from '../atomics/ContactScaleItem';

function ContactScale(){
    const [contactType, setContactType] = useState(true);
    const [clickType, setClickType] = useState(false);

    function handleClickEmail(){
        setContactType(false);
        setClickType(true);
    }

    function handleContactEmail(){
        setContactType(true);
        setClickType(false);
    }

    let contactEmail = 'btn-contact';
    if(contactType === true){
        contactEmail += ' active-btn-contact';
    }

    let clickEmail = 'btn-contact';
    if(clickType === true){
        clickEmail += ' active-btn-contact';
    }

    return (
        <div className="wp-scale">
            <div className="contact-header">
                <p className="scale-txt">Xếp loại liên hệ</p>
                <div className="contact-type">
                    <button className={contactEmail} onClick={handleContactEmail}>Mở email</button>
                    <button className={clickEmail} onClick={handleClickEmail}>Click email</button>
                </div>
            </div>
            <ContactScaleItem />
        </div>
    );
}

export default ContactScale;