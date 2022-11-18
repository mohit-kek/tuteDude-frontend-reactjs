import React from 'react';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
          <div className='dashboard-items'>
            <div>
              <p className='dashboard-item-heading'>Referral Earning</p>
              <p className='dashboard-balance'>₹ 2,500</p>
            </div>
            <div>
              <p className='dashboard-item-heading'>Total Referrals</p>
              <p className='dashboard-balance'>7</p>
            </div>
            <div>
              <p className='dashboard-item-heading'>Wallet Balance</p>
              <p className='dashboard-balance'>₹ 500</p>
            </div>

            <div className='withdraw'>
              <button>Withdraw Balance</button>
            </div>
          </div>

        </div>
    )
}

export default Dashboard