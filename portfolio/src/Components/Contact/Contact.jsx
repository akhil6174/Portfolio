import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/insta.svg'
import github from '../../assets/github.svg'
import check_icon from '../../assets/check_icon.svg'
import cross_icon from '../../assets/cross_icon.svg'
function Contact() {
  const [result, setResult] = React.useState("");
  const apikey=import.meta.env.VITE_WEB3FORM_API
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apikey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" className='img' />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>A tech enthusisat, having passion in development and creating machine learning models.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>akhil6174dwivedi@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91 9569987852</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Mawai,Kaushambi,UP,India-212207</p>
                </div>
            </div>
            <div className="social-media-handels">
              <a href='https://www.linkedin.com/in/akhilendra-dwivedi-861679218/' target='_blank'><img src={linkedin} alt="" /></a>
              <a href='https://x.com/Akhilendra63842?t=UW7o5Zi1ci3mNbf_dAtisA&s=09' target='_blank'><img src={twitter} alt="" /></a>
              <a href='https://github.com/akhil6174' target='_blank'><img src={github} alt="" /></a>
              <a href='https://www.youtube.com/@CodeMantra07' target='_blank'><img src={youtube} alt="" /></a>
              <a href='https://www.instagram.com/akhilendra_dwivedi/?hl=en' target='_blank'><img src={insta} alt="" /></a>
            </div>
        </div>
        <form  onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Your Name Please' required/>
            <label htmlFor="">Your E-mail</label>
            <input type="email" name="email" required placeholder='Your mail_ID Please' />
            <label htmlFor="">Write a message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <div className="submit_and_result">
            <button type='submit' className="contact-submit">Submit Now</button>
            {result==='Form Submitted Successfully'?<img src={check_icon} alt="" />: <></>}
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
