import React from "react";
import "../static/Contact.css";

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            {/* Left Side: Contact Info */}
            <div className="contact-info">
                <h2 className="contact-location">
                    New Jersey, <span>USA</span>
                </h2>
                <p className="contact-address">46 Harmon Road, Edison NJ 08837</p>
                <p className="contact-email">akhillad03@gmail.com</p>
                <p className="contact-phone">+815-66-AKHIL</p>
            </div>

            {/* Right Side: Contact Form */}
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-row">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject (Optional)"
                        />
                    </div>
                    <div className="form-row">
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="contact-btn">
                        Contact Me
                    </button>
                </form>
            </div>

            {/* Optional overlay text on the left side or vertical label if you want */}
            <div className="vertical-label">Contact Me</div>
        </section>
    );
};

export default Contact;