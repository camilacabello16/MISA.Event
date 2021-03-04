import React, { useState } from 'react';
import '../../assets/styles/atomics/ConvertScaleItem.css';
import '../../assets/styles/atomics/ContactScaleItem.css';

function ContactScaleItem(){
    const [contactEmails, setContactEmails] = useState([
        {
            emailId: 1,
            emailName: 'sutubien68@gmail.com',
            emailContact: 18,
            rank: 1
        },
        {
            emailId: 2,
            emailName: 'Nguyenxuanloan1973@gmail.com',
            emailContact: 14,
            rank: 2
        },
        {
            emailId: 3,
            emailName: 'sutubien68@gmail.com',
            emailContact: 12,
            rank: 3
        },
        {
            emailId: 4,
            emailName: 'sutubien68@gmail.com',
            emailContact: 8,
            rank: 4
        },
        {
            emailId: 5,
            emailName: 'sutubien68@gmail.com',
            emailContact: 4,
            rank: 5
        },
        {
            emailId: 6,
            emailName: 'sutubien68@gmail.com',
            emailContact: 4,
            rank: 5
        },
        {
            emailId: 7,
            emailName: 'sutubien68@gmail.com',
            emailContact: 4,
            rank: 5
        },
    ]);

    const listEmail = contactEmails.map((email) => {
        return(
            <div className="scale-item scale-contact" key={email.emailId}>
                <div className="scale-number">0{email.rank}</div>
                <div className="email-name" title={email.emailName}>{email.emailName}</div>
                <div className="number-contact">{email.emailContact}</div>
            </div>
        );
    })

    return (
        <div className="scale-list">
            {listEmail}
        </div>
    );
}

export default ContactScaleItem;