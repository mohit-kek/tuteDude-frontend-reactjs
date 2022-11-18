import React from 'react';
import "./FriendsReferredPage.css"
import ReferralCodeBox from '../../components/ReferralCodeBox/ReferralCodeBox'
import ReferEarnPage from '../ReferEarnPage/ReferEarnPage';
import EnrolledFriend from '../../components/EnrolledFriend/EnrolledFriend';
import { IoArrowBackOutline } from "react-icons/io5"
import { Link } from 'react-router-dom';


const FriendsReferredPage = () => {
  return (
    <div className='box'>
      <div className='go-back'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>
            <IoArrowBackOutline /> go back
          </span>
        </Link>
      </div>
      <div className='primary-box'>
        <div className='referral-box'>
          <ReferralCodeBox />
        </div>
        <div className="wallet-box">
          <p className='wallet-heading'>Wallet Balance</p>
          <p className='wallet-amount'>₹ 500</p>
        </div>
      </div>

      <div className="secondary-box">
        <p>Friends who enrolled</p>
        <span>(3)</span>
        <div>
          <EnrolledFriend />
          <EnrolledFriend />
          <EnrolledFriend />
        </div>
      </div>
    </div>
  )
}

export default FriendsReferredPage