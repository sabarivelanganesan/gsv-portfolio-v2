import React from "react";
import call from './styles/call.png'
import location from './styles/location.png'
import mail from './styles/mail.png'

// function contactSubmission() {
//     alert("Form Submitted");
// }

function ContactMe() {
    return (
        <div className="connect-section">
            <p className="connect-title1">Contact Me</p>
            <p className="connect-title2">Get in Touch</p>
            <div className="contact">
                {/* <form onSubmit={contactSubmission} className="contact-form">
                    <div>
                        <input type="text" className="contact-name" name="ContactName" placeholder="Name" />
                        <input type="text" className="contact-email" name="ContactEmail" placeholder="Email" />
                    </div>
                    <input type="text" className="contact-sub" name="ContactSubject" placeholder="Subject" />
                    <textarea type="text" className="contact-msg" name="ContactMessage"/>
                </form> */}
                <div className="contact-details">
                    <div className="contact-item">
                        <div className="contact-icon-border">
                            <img src={call} alt="Call Icon" />
                        </div>
                        <div className="item-details">
                            <p>+44 7436992116</p>
                            <p>For job opportunities, please call or text. Otherwise, email is preferred. Thank you</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon-border">
                            <img src={mail} alt="Email   Icon" />
                        </div>
                        <div className="item-details">
                            <p>sabarivelangn@gmail.com</p>
                            <p>Prefer email communication. Fluent in English. Thank you.</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon-border">
                            <img src={location} alt="Location Icon" />
                        </div>
                        <div className="item-details">
                            <p>Loughborough, United Kingdom</p>
                            <p>I'm happy to work on-site or remote but prefer to meet face-to-face atleast once in a while</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactMe;