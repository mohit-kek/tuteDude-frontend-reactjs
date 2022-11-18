import React from 'react';
import ICONS from '../../data/data';
import "./WorkingInstructions.css";

const workingInstructions = () => {
    console.log(ICONS);
    return (
        <div className="outer-container">
            <p>How does it work ?</p>
            <div className="inner-container">
                <div className="inner-container-items">
                    <span>
                        <img src={ICONS.invitePeople} alt="" />
                    </span>
                    <div>
                        <p className='inner-heading'>Invite your Friends</p>
                        <p className='inner-detail'>Share the link tutedude.com with your friends</p>
                    </div>
                </div>
                <div className="inner-container-items">
                    <span>
                        <img src={ICONS.referralCoupon} alt="" />
                    </span>
                    <div>
                        <p className='inner-heading'>Friend purchases any course</p>
                        <p className='inner-detail'>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>
                <div className="inner-container-items">
                    <span>
                        <img src={ICONS.rupee} alt="" />
                    </span>
                    <div>
                        <p className='inner-heading'>You get ₹ 200 as referral money</p>
                        <p className='inner-detail'>On total purchase the friend makes, into your wallet </p>
                    </div>
                </div>
                <div className="inner-container-items">
                    <span>
                        <img src={ICONS.discount} alt="" />
                    </span>
                    <div>
                        <p className='inner-heading'>Your Friend gets ₹ 200 Off</p>
                        <p className='inner-detail'>On his overall fee on successful purchase using your referral code</p>
                    </div>
                </div>
                <div className="inner-container-items">
                    <span>
                        <img src={ICONS.wallet} alt="" />
                    </span>
                    <div>
                        <p className='inner-heading'>Transfer money from wallet </p>
                        <p className='inner-detail'>When the wallet balance reaches ₹ 200 or more, you can withdraw it</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default workingInstructions