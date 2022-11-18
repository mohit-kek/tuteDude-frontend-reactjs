import React from 'react';
import "./ReferralCodeBox.css"

const ReferralCodeBox = () => {
    return (
        <div className="referral-code-box">
            <p>Your Referral Code</p>
            <div className='referral-code-input'>
                <input type="text" maxLength="5" />
            </div>
        </div>
    )
}

export default ReferralCodeBox