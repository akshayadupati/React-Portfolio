import React from "react";
import "./index.scss";

function Contact() {
  return (
    <div>
      <h1>Contact Form</h1>
      <form
        action="https://formsubmit.co/el/pamahi"
        target="_blank"
        method="POST"
      >
        <div className="contact">
          <input
            type="hidden"
            name="_subject"
            value="Message from employer!"
          ></input>
          <input
            type="hidden"
            name="_next"
            value="https://react-portfolio-akshayadupati-gmailcom.vercel.app/"
          ></input>
          <div class="form-item">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div class="form-item">
            <input type="text" name="name" placeholder="Type your message.." required />
          </div>
          <button type="submit"> Send </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
