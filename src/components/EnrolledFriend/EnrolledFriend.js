import React from 'react';
import "./EnrolledFriend.css";

const EnrolledFriend = () => {
    return (
        <div className='enrolled-box'>
            <div>
                <span className="friend-name">Dhiraj Saxena</span>
                <span className="date">14Sep, 2022</span>
            </div>

            <div>
                <p className='heading'>Courses Enrolled(6)</p>
                <div className="courses">
                    <span className="course">UI/UX</span>
                    <span className="course">Photoshop</span>
                    <span className="course">Illustrator</span>
                    <span className="course">Python</span>
                    <span className="course">MERN</span>
                    <span className="course">Java</span>
                </div>
            </div>


            <div className="referral-amount">
                <p>Referral Amount</p>
                <span>₹185</span>
            </div>

        </div>
    )
}

export default EnrolledFriend
