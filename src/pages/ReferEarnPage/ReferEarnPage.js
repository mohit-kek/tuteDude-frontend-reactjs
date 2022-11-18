import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import ReferralCodeBox from '../../components/ReferralCodeBox/ReferralCodeBox';
import WorkingInstructions from "../../components/WorkingInstructions/WorkingInstructions"
import "./ReferEarnPage.css";

const ReferEarnPage = () => {
  return (
    <div className='container'>

      <div>
        <Dashboard />

        <ReferralCodeBox />

      </div>

      <div>
        <WorkingInstructions />
      </div>

      
      <div className='enrolled' >
        <Link to="/enrolled" style={{ textDecoration: "none" }}>
          <p>Friends Who Enrolled </p>
        </Link>
      </div>
    </div>
  )
}

export default ReferEarnPage