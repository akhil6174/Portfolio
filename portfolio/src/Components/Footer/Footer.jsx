import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo1.png';
import user_icon from '../../assets/user_icon.svg';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      // Here you can handle the email as needed, such as sending it to your backend server

      // Redirect to the YouTube subscription link
      const channelId = 'UCOC5j7FkHHBh_rWRCvbplNg'; // Replace with your actual channel ID
      const subscribeUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`;
      window.location.href = subscribeUrl;
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className='footer'>
      <hr />
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" className='logo1' />
          <p>A B.tech Graduate seeking for work, to upskill and learn new tech so that I can upgrade myself.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              name="mail"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Footer;
